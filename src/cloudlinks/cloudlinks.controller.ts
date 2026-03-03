import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CloudlinksService } from './cloudlinks.service';

@Controller('CloudLinks')
export class CloudlinksController {
  constructor(private readonly cloudlinksService: CloudlinksService) {}

  // GET /CloudLinks/getAllCloudLinks
  @Get('getAllCloudLinks')
  async getAllCloudLinks() {
    try {
      const cloudLinksTables = await this.cloudlinksService.getAllCloudLinkTables();
      return { success: true, cloudLinksTables };
    } catch (err) {
      return { success: false, msg: 'אין טבלאות של קישורים לענן' };
    }
  }

  // POST /CloudLinks/addCloudLinkTable
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

  // POST /CloudLinks/deleteEntry/:CloudLinkTableId
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

  // GET /CloudLinks/:CloudLinkTableId
  @Get(':CloudLinkTableId')
  async getCloudLinkByTableId(@Param('CloudLinkTableId') tableId: string) {
    try {
      const cloudLinksTable = await this.cloudlinksService.getCloudLinkByTableId(tableId);
      return { success: true, cloudLinksTable };
    } catch (err) {
      return { success: false, msg: 'לא נמצאה הטבלה' };
    }
  }

  // POST /CloudLinks/:CloudLinkTableId — add entry to table
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

  // DELETE /CloudLinks/:CloudLinkTableId
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
