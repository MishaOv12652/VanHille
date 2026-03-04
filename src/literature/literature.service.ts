import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LiteratureEntry, LiteratureDocument } from './schemas/literature.schema';

@Injectable()
export class LiteratureService {
  constructor(
    @InjectModel(LiteratureEntry.name)
    private literatureModel: Model<LiteratureDocument>,
  ) {}

  async getAll(): Promise<LiteratureDocument[]> {
    return this.literatureModel.find({}).sort({ category: 1, title: 1 });
  }

  async addEntry(entry: {
    title: string;
    desc: string;
    url: string;
    category: string;
  }): Promise<LiteratureDocument> {
    const created = new this.literatureModel(entry);
    return created.save();
  }

  async deleteEntry(id: string): Promise<any> {
    return this.literatureModel.findByIdAndDelete(id);
  }
}
