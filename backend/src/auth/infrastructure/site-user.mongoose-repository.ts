import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISiteUserRepository } from '../domain/site-user-repository.interface';
import { SiteUser } from '../domain/site-user.entity';
import { SiteUserDocument } from './mongoose/site-user.schema';

@Injectable()
export class SiteUserMongooseRepository implements ISiteUserRepository {
  constructor(
    @InjectModel(SiteUserDocument.name)
    private readonly model: Model<SiteUserDocument>,
  ) {}

  async findById(id: string): Promise<SiteUser | null> {
    const doc = await this.model.findById(id);
    return doc ? this.toDomain(doc) : null;
  }

  async findByUsername(username: string): Promise<SiteUser | null> {
    const doc = await this.model.findOne({ username });
    return doc ? this.toDomain(doc) : null;
  }

  async create(
    user: Pick<SiteUser, 'email' | 'username' | 'password'>,
  ): Promise<SiteUser> {
    const created = await this.model.create(user);
    return this.toDomain(created);
  }

  private toDomain(doc: SiteUserDocument): SiteUser {
    return {
      _id: doc._id.toString(),
      email: doc.email,
      username: doc.username,
      password: doc.password,
    };
  }
}
