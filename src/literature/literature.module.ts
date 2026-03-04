import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LiteratureController } from './literature.controller';
import { LiteratureService } from './literature.service';
import { LiteratureEntry, LiteratureSchema } from './schemas/literature.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LiteratureEntry.name, schema: LiteratureSchema },
    ]),
    AuthModule,
  ],
  controllers: [LiteratureController],
  providers: [LiteratureService],
})
export class LiteratureModule {}
