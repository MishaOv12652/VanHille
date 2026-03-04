import { Controller, Get, Post, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CloudlinksService } from './cloudlinks.service';

@Controller('CloudLinks')
export class CloudlinksController {
  constructor(private readonly cloudlinksService: CloudlinksService) {}

  // GET /CloudLinks/getAllCloudLinks — public
  @Get('getAllCloudLinks')
  async getAllCloudLinks() {
    try {
      const cloudLinksTables = await this.cloudlinksService.getAllCloudLinkTables();
      return { success: true, cloudLinksTables };
    } catch (err) {
      return { success: false, msg: 'אין טבלאות של קישורים לענן' };
    }
  }

  // POST /CloudLinks/addCloudLinkTable — educator, admin
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('educator', 'admin')
  @Post('addCloudLinkTable')
  async addCloudLinkTable(
    @Body() body: { tableId: string; settings_obj: Record<string, any>; data: any[] },
  ) {
    try {
      const cloudLinkTable = await this.cloudlinksService.addCloudLinkTable(body);
      return { success: true, cloudLinkTable };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // POST /CloudLinks/deleteEntry/:CloudLinkTableId — educator, admin
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('educator', 'admin')
  @Post('deleteEntry/:CloudLinkTableId')
  async deleteEntry(
    @Param('CloudLinkTableId') tableId: string,
    @Body() body: any,
  ) {
    try {
      const deletedCloudLinksTable =
        await this.cloudlinksService.deleteEntryFromCloudLinkTable(tableId, body);
      return { success: true, deletedCloudLinksTable };
    } catch (err) {
      return { success: false, msg: 'תקלה במחיקת שורה מטבלה של קישור לענן' };
    }
  }

  // GET /CloudLinks/:CloudLinkTableId — public
  @Get(':CloudLinkTableId')
  async getCloudLinkByTableId(@Param('CloudLinkTableId') tableId: string) {
    try {
      const cloudLinksTable = await this.cloudlinksService.getCloudLinkByTableId(tableId);
      return { success: true, cloudLinksTable };
    } catch (err) {
      return { success: false, msg: 'לא נמצאה הטבלה' };
    }
  }

  // POST /CloudLinks/:CloudLinkTableId — add entry, educator, admin
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('educator', 'admin')
  @Post(':CloudLinkTableId')
  async addEntry(
    @Param('CloudLinkTableId') tableId: string,
    @Body() body: any,
  ) {
    try {
      const updatedCloudLinksTable =
        await this.cloudlinksService.addEntryToCloudLinkTable(tableId, body);
      return { success: true, updatedCloudLinksTable };
    } catch (err) {
      return { success: false, msg: 'תקלה בהוספה שורה לטבלה של קישור לענן' };
    }
  }

  // DELETE /CloudLinks/:CloudLinkTableId — educator, admin
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('educator', 'admin')
  @Delete(':CloudLinkTableId')
  async deleteTable(@Param('CloudLinkTableId') tableId: string) {
    try {
      const deletedCloudLinksTable =
        await this.cloudlinksService.deleteCloudLinkTable(tableId);
      return { success: true, updatedCloudLinksTable: deletedCloudLinksTable };
    } catch (err) {
      return { success: false, msg: 'תקלה במחיקת טבלה של קישור לענן' };
    }
  }
}
