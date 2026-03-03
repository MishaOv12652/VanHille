import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { CalcUserService } from './calc-user.service';
import { CalcClassService } from './calc-class.service';
import { Quiz, QuizSchema } from './schemas/quiz.schema';
import { Question, QuestionSchema } from './schemas/question.schema';
import { StudentsModule } from '../students/students.module';
import { Student, StudentSchema } from '../students/schemas/student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Quiz.name, schema: QuizSchema },
      { name: Question.name, schema: QuestionSchema },
      { name: Student.name, schema: StudentSchema },
    ]),
    StudentsModule,
  ],
  controllers: [QuizController],
  providers: [QuizService, CalcUserService, CalcClassService],
})
export class QuizModule {}
