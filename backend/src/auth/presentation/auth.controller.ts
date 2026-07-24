import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../application/auth.service';

@Controller('User')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() body: { email: string; username: string; password: string },
  ) {
    try {
      await this.authService.register(body.email, body.username, body.password);
      return { success: true, msg: 'משתמש נרשם' };
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  @Post('auth')
  async authenticate(@Body() body: { username: string; password: string }) {
    try {
      const result = await this.authService.authenticate(
        body.username,
        body.password,
      );
      return { success: true, token: result.token, siteUser: result.siteUser };
    } catch (err) {
      return { success: false, msg: err.message };
    }
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  getProfile(@Req() req: any) {
    return { user: req.user };
  }
}
