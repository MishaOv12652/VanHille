import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LiteratureController } from './literature.controller';
import { LiteratureService } from './literature.service';
import { LiteratureEntry, LiteratureSchema } from './schemas/literature.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LiteratureEntry.name, schema: LiteratureSchema },
    ]),
  ],
  controllers: [LiteratureController],
  providers: [LiteratureService],
})
export class LiteratureModule {}
