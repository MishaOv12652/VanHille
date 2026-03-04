import { Controller, Get, Post, Param, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { InvitesService } from './invites.service';

@Controller('Invites')
export class InvitesController {
  constructor(private readonly invitesService: InvitesService) {}

  // POST /Invites/email — educator/admin sends email invite
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('educator', 'admin')
  @Post('email')
  async sendEmailInvite(
    @Request() req: any,
    @Body() body: { email: string; groupId: string; role: string },
  ) {
    return this.invitesService.createAndSendInvite({
      ...body,
      invitedBy: req.user._id.toString(),
    });
  }

  // GET /Invites/validate/:token — public, validate invite token
  @Get('validate/:token')
  async validateToken(@Param('token') token: string) {
    const result = await this.invitesService.validateToken(token);
    if (!result.valid) return { success: false, msg: result.msg };
    return {
      success: true,
      role: result.invite!.role,
      group: {
        name: result.group?.name,
        courseNum: result.group?.courseNum,
        groupNum: result.group?.groupNum,
      },
    };
  }

  // POST /Invites/join/code — public, validate join code
  @Post('join/code')
  async joinByCode(@Body() body: { joinCode: string }) {
    const result = await this.invitesService.validateJoinCode(body.joinCode);
    if (!result.valid) return { success: false, msg: result.msg };
    return {
      success: true,
      role: 'student',
      group: {
        name: result.group?.name,
        courseNum: result.group?.courseNum,
        groupNum: result.group?.groupNum,
      },
    };
  }

  // POST /Invites/use/:token — public, mark invite as used after successful registration
  @Post('use/:token')
  async markUsed(@Param('token') token: string) {
    const result = await this.invitesService.validateToken(token);
    if (!result.valid) return { success: false, msg: result.msg };
    await this.invitesService.markUsed(token);
    return { success: true };
  }
}
