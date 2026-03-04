import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Group, GroupDocument } from './schemas/group.schema';

function generateJoinCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Group.name) private groupModel: Model<GroupDocument>,
  ) {}

  async getMyGroups(userId: string, role: string): Promise<GroupDocument[]> {
    if (role === 'admin') return this.groupModel.find({}).sort({ createdAt: -1 });
    return this.groupModel.find({ educatorId: userId }).sort({ createdAt: -1 });
  }

  async createGroup(data: {
    name: string;
    courseNum: number;
    groupNum: number;
    educatorId: string;
  }): Promise<GroupDocument> {
    let joinCode: string;
    let exists = true;
    do {
      joinCode = generateJoinCode();
      exists = !!(await this.groupModel.findOne({ joinCode }));
    } while (exists);

    const group = new this.groupModel({ ...data, joinCode });
    return group.save();
  }

  async deleteGroup(id: string, userId: string, role: string): Promise<any> {
    if (role === 'admin') return this.groupModel.findByIdAndDelete(id);
    return this.groupModel.findOneAndDelete({ _id: id, educatorId: userId });
  }

  async findByJoinCode(joinCode: string): Promise<GroupDocument | null> {
    return this.groupModel.findOne({ joinCode: joinCode.toUpperCase() });
  }

  async findById(id: string): Promise<GroupDocument | null> {
    return this.groupModel.findById(id);
  }
}
