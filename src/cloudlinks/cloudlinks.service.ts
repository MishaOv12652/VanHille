import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudLink, CloudLinkDocument } from './schemas/cloudlink.schema';

@Injectable()
export class CloudlinksService {
  constructor(
    @InjectModel(CloudLink.name)
    private cloudLinkModel: Model<CloudLinkDocument>,
  ) {}

  async getAllCloudLinkTables(): Promise<CloudLinkDocument[]> {
    return this.cloudLinkModel.find({}).sort({ tableId: 1 });
  }

  async getCloudLinkByTableId(tableId: string): Promise<CloudLinkDocument | null> {
    return this.cloudLinkModel.findOne({ tableId });
  }

  async addCloudLinkTable(data: {
    tableId: string;
    settings_obj: Record<string, any>;
    data: any[];
  }): Promise<CloudLinkDocument> {
    const created = new this.cloudLinkModel(data);
    return created.save();
  }

  async addEntryToCloudLinkTable(
    tableId: string,
    entry: { id: any; name: any; desc: any; url: any },
  ): Promise<CloudLinkDocument | null> {
    const newEntry = {
      id: entry.id,
      name: entry.name,
      desc: entry.desc,
      url: entry.url,
    };
    return this.cloudLinkModel.findOneAndUpdate(
      { tableId },
      { $push: { data: newEntry } },
      { new: true },
    );
  }

  async deleteEntryFromCloudLinkTable(
    tableId: string,
    entry: { id: any; name: any; desc: any; url: any },
  ): Promise<CloudLinkDocument | null> {
    const entryToDelete = {
      id: entry.id,
      name: entry.name,
      desc: entry.desc,
      url: entry.url,
    };
    return this.cloudLinkModel.findOneAndUpdate(
      { tableId },
      { $pull: { data: entryToDelete } },
      { new: true },
    );
  }

  async deleteCloudLinkTable(tableId: string): Promise<any> {
    return this.cloudLinkModel.deleteOne({ tableId });
  }
}
