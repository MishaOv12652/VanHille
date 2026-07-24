import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CloudLinksController } from './presentation/cloud-links.controller';
import { CloudLinksService } from './application/cloud-links.service';
import { CLOUD_LINK_REPOSITORY } from './domain/cloud-link-repository.interface';
import { CloudLinkMongooseRepository } from './infrastructure/cloud-link.mongoose-repository';
import {
  CloudLinkDocument,
  CloudLinkSchema,
} from './infrastructure/mongoose/cloud-link.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CloudLinkDocument.name, schema: CloudLinkSchema },
    ]),
  ],
  controllers: [CloudLinksController],
  providers: [
    CloudLinksService,
    { provide: CLOUD_LINK_REPOSITORY, useClass: CloudLinkMongooseRepository },
  ],
})
export class CloudLinksModule {}
