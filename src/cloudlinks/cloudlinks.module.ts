import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CloudlinksController } from './cloudlinks.controller';
import { CloudlinksService } from './cloudlinks.service';
import { CloudLink, CloudLinkSchema } from './schemas/cloudlink.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CloudLink.name, schema: CloudLinkSchema },
    ]),
  ],
  controllers: [CloudlinksController],
  providers: [CloudlinksService],
})
export class CloudlinksModule {}
