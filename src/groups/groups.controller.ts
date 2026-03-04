import { Controller, Get, Post, Delete, Param, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { GroupsService } from './groups.service';

@Controller('Groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  // GET /Groups — get my groups (educator: own, admin: all)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('educator', 'admin')
  @Get()
  async getMyGroups(@Request() req: any) {
    try {
      const groups = await this.groupsService.getMyGroups(
        req.user._id.toString(),
        req.user.role,
      );
      return { success: true, groups };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // POST /Groups — create group
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('educator', 'admin')
  @Post()
  async createGroup(@Request() req: any, @Body() body: { name: string; courseNum: number; groupNum: number }) {
    try {
      const group = await this.groupsService.createGroup({
        ...body,
        educatorId: req.user._id.toString(),
      });
      return { success: true, group };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // DELETE /Groups/:id
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('educator', 'admin')
  @Delete(':id')
  async deleteGroup(@Request() req: any, @Param('id') id: string) {
    try {
      const result = await this.groupsService.deleteGroup(
        id,
        req.user._id.toString(),
        req.user.role,
      );
      if (!result) return { success: false, msg: 'קבוצה לא נמצאה' };
      return { success: true };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }
}
