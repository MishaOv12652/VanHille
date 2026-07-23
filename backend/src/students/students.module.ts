import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsController } from './presentation/students.controller';
import { StudentsService } from './application/students.service';
import { STUDENT_REPOSITORY } from './domain/student-repository.interface';
import { VhStudentMongooseRepository } from './infrastructure/vh-student.mongoose-repository';
import {
  VhStudentDocument,
  VhStudentSchema,
} from './infrastructure/mongoose/vh-student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VhStudentDocument.name, schema: VhStudentSchema },
    ]),
  ],
  controllers: [StudentsController],
  providers: [
    StudentsService,
    { provide: STUDENT_REPOSITORY, useClass: VhStudentMongooseRepository },
  ],
  exports: [MongooseModule],
})
export class StudentsModule {}
