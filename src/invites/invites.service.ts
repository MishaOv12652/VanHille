import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { randomUUID } from 'crypto';
import { Resend } from 'resend';
import { Invite, InviteDocument } from './schemas/invite.schema';
import { GroupsService } from '../groups/groups.service';

@Injectable()
export class InvitesService {
  private resend: Resend;

  constructor(
    @InjectModel(Invite.name) private inviteModel: Model<InviteDocument>,
    private groupsService: GroupsService,
    private configService: ConfigService,
  ) {
    this.resend = new Resend(this.configService.get<string>('RESEND_API_KEY'));
  }

  async createAndSendInvite(data: {
    email: string;
    groupId: string;
    role: string;
    invitedBy: string;
  }): Promise<{ success: boolean; msg?: string }> {
    const group = await this.groupsService.findById(data.groupId);
    if (!group) return { success: false, msg: 'קבוצה לא נמצאה' };

    const token = randomUUID();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await this.inviteModel.create({ ...data, token, expiresAt });

    const appUrl = this.configService.get<string>('APP_URL') ?? 'http://localhost:3050';
    const joinUrl = `${appUrl}/join?token=${token}`;

    const fromEmail = this.configService.get<string>('RESEND_FROM_EMAIL') ?? 'noreply@yourdomain.com';

    try {
      await this.resend.emails.send({
        from: fromEmail,
        to: data.email,
        subject: `הזמנה להצטרף לקבוצה ${group.name}`,
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2>הוזמנת להצטרף לקבוצה</h2>
            <p><strong>שם קבוצה:</strong> ${group.name}</p>
            <p><strong>מספר קורס:</strong> ${group.courseNum}</p>
            <p><strong>מספר קבוצה:</strong> ${group.groupNum}</p>
            <br/>
            <a href="${joinUrl}"
               style="background:#337ab7;color:white;padding:12px 24px;text-decoration:none;border-radius:4px;display:inline-block">
              הצטרף לקבוצה
            </a>
            <p style="color:#888;font-size:12px;margin-top:20px">הקישור תקף ל-7 ימים.</p>
          </div>
        `,
      });
      return { success: true };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  async validateToken(token: string): Promise<{
    valid: boolean;
    invite?: InviteDocument;
    group?: any;
    msg?: string;
  }> {
    const invite = await this.inviteModel.findOne({ token });
    if (!invite) return { valid: false, msg: 'הזמנה לא נמצאה' };
    if (invite.used) return { valid: false, msg: 'הזמנה כבר שומשה' };
    if (invite.expiresAt < new Date()) return { valid: false, msg: 'הזמנה פגה תוקף' };

    const group = await this.groupsService.findById(invite.groupId);
    return { valid: true, invite, group };
  }

  async validateJoinCode(joinCode: string): Promise<{
    valid: boolean;
    group?: any;
    msg?: string;
  }> {
    const group = await this.groupsService.findByJoinCode(joinCode);
    if (!group) return { valid: false, msg: 'קוד הצטרפות לא נמצא' };
    return { valid: true, group };
  }

  async markUsed(token: string): Promise<void> {
    await this.inviteModel.updateOne({ token }, { used: true });
  }
}
