import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizController } from './presentation/quiz.controller';
import { QuizService } from './application/quiz.service';
import { QUESTION_REPOSITORY } from './domain/question-repository.interface';
import { QUIZ_RESULT_REPOSITORY } from './domain/quiz-result-repository.interface';
import { STUDENT_ANSWERS_PORT } from './domain/student-answers-port.interface';
import { QuestionMongooseRepository } from './infrastructure/question.mongoose-repository';
import { QuizResultMongooseRepository } from './infrastructure/quiz-result.mongoose-repository';
import { StudentAnswersMongooseAdapter } from './infrastructure/student-answers.mongoose-adapter';
import {
  QuestionDocument,
  QuestionSchema,
} from './infrastructure/mongoose/question.schema';
import {
  QuizResultDocument,
  QuizResultSchema,
} from './infrastructure/mongoose/quiz-result.schema';
import {
  QuizStudentDocument,
  QuizStudentSchema,
} from './infrastructure/mongoose/quiz-student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: QuestionDocument.name, schema: QuestionSchema },
      { name: QuizResultDocument.name, schema: QuizResultSchema },
      { name: QuizStudentDocument.name, schema: QuizStudentSchema },
    ]),
  ],
  controllers: [QuizController],
  providers: [
    QuizService,
    { provide: QUESTION_REPOSITORY, useClass: QuestionMongooseRepository },
    {
      provide: QUIZ_RESULT_REPOSITORY,
      useClass: QuizResultMongooseRepository,
    },
    {
      provide: STUDENT_ANSWERS_PORT,
      useClass: StudentAnswersMongooseAdapter,
    },
  ],
})
export class QuizModule {}
