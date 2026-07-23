import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CloudLinksService } from '../application/cloud-links.service';
import { CloudLink, CloudLinkEntry } from '../domain/cloud-link.entity';

@Controller('CloudLinks')
export class CloudLinksController {
  constructor(private readonly cloudLinksService: CloudLinksService) {}

  @Get('getAllCloudLinks')
  async getAllCloudLinks() {
    try {
      const cloudLinksTables =
        await this.cloudLinksService.getAllCloudLinkTables();
      return { success: true, cloudLinksTables };
    } catch (err) {
      return { success: false, msg: 'אין טבלאות של קישורים לענן' };
    }
  }

  @Post('addCloudLinkTable')
  async addCloudLinkTable(@Body() body: CloudLink) {
    try {
      const cloudLinkTable = await this.cloudLinksService.addCloudLinkTable({
        tableId: body.tableId,
        settings_obj: body.settings_obj,
        data: body.data,
      });
      return { success: true, cloudLinkTable };
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  @Post('deleteEntry/:CloudLinkTableId')
  async deleteEntry(
    @Param('CloudLinkTableId') cloudLinkTableId: string,
    @Body() entry: CloudLinkEntry,
  ) {
    try {
      const deletedCloudLinksTable =
        await this.cloudLinksService.deleteEntryFromCloudLinkTable(
          cloudLinkTableId,
          entry,
        );
      return { success: true, deletedCloudLinksTable };
    } catch (err) {
      return {
        success: false,
        msg: 'תקלה במחיקת שורה מטבלה של קישור לענן',
      };
    }
  }

  @Get(':CloudLinkTableId')
  async getCloudLinkByTableId(
    @Param('CloudLinkTableId') cloudLinkTableId: string,
  ) {
    try {
      const cloudLinksTable =
        await this.cloudLinksService.getCloudLinkByTableId(cloudLinkTableId);
      return { success: true, cloudLinksTable };
    } catch (err) {
      return { success: false, msg: 'לא נמצאה הטבלה' };
    }
  }

  @Post(':CloudLinkTableId')
  async addEntryToCloudLinkTable(
    @Param('CloudLinkTableId') cloudLinkTableId: string,
    @Body() entry: CloudLinkEntry,
  ) {
    try {
      const updatedCloudLinksTable =
        await this.cloudLinksService.addEntryToCloudLinkTable(
          cloudLinkTableId,
          entry,
        );
      return { success: true, updatedCloudLinksTable };
    } catch (err) {
      return {
        success: false,
        msg: 'תקלה בהוספה שורה לטבלה של קישור לענן',
      };
    }
  }

  @Delete(':CloudLinkTableId')
  async deleteCloudLinkTable(
    @Param('CloudLinkTableId') cloudLinkTableId: string,
  ) {
    try {
      const updatedCloudLinksTable =
        await this.cloudLinksService.deleteCloudLinkTable(cloudLinkTableId);
      return { success: true, updatedCloudLinksTable };
    } catch (err) {
      return { success: false, msg: 'תקלה במחיקת טבלה של קישור לענן' };
    }
  }
}
