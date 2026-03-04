import { Controller, Get, Post, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { LiteratureService } from './literature.service';

@Controller('Literature')
export class LiteratureController {
  constructor(private readonly literatureService: LiteratureService) {}

  // GET /Literature — public
  @Get()
  async getAll() {
    try {
      const entries = await this.literatureService.getAll();
      return { success: true, entries };
    } catch (err) {
      return { success: false, msg: 'שגיאה בטעינת הספרות' };
    }
  }

  // POST /Literature — educator, admin
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('educator', 'admin')
  @Post()
  async addEntry(@Body() body: { title: string; desc: string; url: string; category: string }) {
    try {
      const entry = await this.literatureService.addEntry(body);
      return { success: true, entry };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // DELETE /Literature/:id — educator, admin
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('educator', 'admin')
  @Delete(':id')
  async deleteEntry(@Param('id') id: string) {
    try {
      await this.literatureService.deleteEntry(id);
      return { success: true };
    } catch (err) {
      return { success: false, msg: 'שגיאה במחיקת הרשומה' };
    }
  }
}
