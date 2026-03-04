import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { LiteratureService } from './literature.service';

@Controller('Literature')
export class LiteratureController {
  constructor(private readonly literatureService: LiteratureService) {}

  // GET /Literature
  @Get()
  async getAll() {
    try {
      const entries = await this.literatureService.getAll();
      return { success: true, entries };
    } catch (err) {
      return { success: false, msg: 'שגיאה בטעינת הספרות' };
    }
  }

  // POST /Literature
  @Post()
  async addEntry(@Body() body: { title: string; desc: string; url: string; category: string }) {
    try {
      const entry = await this.literatureService.addEntry(body);
      return { success: true, entry };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // DELETE /Literature/:id
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
