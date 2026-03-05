import { Controller, Get, Post, Patch, Delete, Param, Body, Query, UseGuards, Request } from '@nestjs/common';
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

  // PATCH /Groups/:id/unlock — toggle attempt2Locked
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('educator', 'admin')
  @Patch(':id/unlock')
  async toggleUnlock(@Request() req: any, @Param('id') id: string) {
    try {
      const group = await this.groupsService.toggleUnlock(
        id,
        req.user._id.toString(),
        req.user.role,
      );
      if (!group) return { success: false, msg: 'קבוצה לא נמצאה או אין הרשאה' };
      return { success: true, attempt2Locked: group.attempt2Locked };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // GET /Groups/lock-status?courseNum=X&groupNum=Y — public, used by quiz form
  @Get('lock-status')
  async getLockStatus(
    @Query('courseNum') courseNum: string,
    @Query('groupNum') groupNum: string,
  ) {
    try {
      const group = await this.groupsService.findByCourseAndGroup(
        Number(courseNum),
        Number(groupNum),
      );
      if (!group) return { success: true, attempt2Locked: false };
      return { success: true, attempt2Locked: group.attempt2Locked };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }
}
