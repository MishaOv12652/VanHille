import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICloudLinkRepository } from '../domain/cloud-link-repository.interface';
import { CloudLink, CloudLinkEntry } from '../domain/cloud-link.entity';
import { CloudLinkDocument } from './mongoose/cloud-link.schema';

@Injectable()
export class CloudLinkMongooseRepository implements ICloudLinkRepository {
  constructor(
    @InjectModel(CloudLinkDocument.name)
    private readonly model: Model<CloudLinkDocument>,
  ) {}

  async findAll(): Promise<CloudLink[]> {
    const docs = await this.model.find({}).sort({ tableId: 1 });
    return docs.map((doc) => this.toDomain(doc));
  }

  async findByTableId(tableId: string): Promise<CloudLink | null> {
    const doc = await this.model.findOne({ tableId });
    return doc ? this.toDomain(doc) : null;
  }

  async create(cloudLink: CloudLink): Promise<CloudLink> {
    const created = await this.model.create(cloudLink);
    return this.toDomain(created);
  }

  async addEntry(
    tableId: string,
    entry: CloudLinkEntry,
  ): Promise<CloudLink | null> {
    const doc = await this.model.findOneAndUpdate(
      { tableId },
      { $push: { data: entry } },
      { new: true },
    );
    return doc ? this.toDomain(doc) : null;
  }

  async removeEntry(
    tableId: string,
    entry: CloudLinkEntry,
  ): Promise<CloudLink | null> {
    const doc = await this.model.findOneAndUpdate(
      { tableId },
      { $pull: { data: entry } },
      { new: true },
    );
    return doc ? this.toDomain(doc) : null;
  }

  async deleteByTableId(tableId: string): Promise<CloudLink | null> {
    const doc = await this.model.findOneAndDelete({ tableId });
    return doc ? this.toDomain(doc) : null;
  }

  private toDomain(doc: CloudLinkDocument): CloudLink {
    return {
      _id: doc._id.toString(),
      tableId: doc.tableId,
      settings_obj: doc.settings_obj,
      data: (doc.data ?? []) as CloudLinkEntry[],
    };
  }
}
