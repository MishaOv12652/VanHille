import { Controller, Get, Param, Post } from '@nestjs/common';
import { QuizService } from '../application/quiz.service';

@Controller('VanHilleQuiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('questions')
  async getAllQuestions() {
    try {
      const questions = await this.quizService.getAllQuestions();
      return { success: true, questions };
    } catch (err) {
      return { success: false, msg: 'אין שאלות' };
    }
  }

  @Get(':id')
  async getQuestion(@Param('id') id: string) {
    try {
      const question = await this.quizService.getQuestion(parseInt(id, 10));
      return { success: true, question };
    } catch (err) {
      return { success: false, msg: 'לא נמצאה שאלה' };
    }
  }

  @Post('calcStudent/:tryNum/:id')
  async calcStudent(
    @Param('tryNum') tryNum: string,
    @Param('id') id: string,
  ) {
    try {
      const studentRes = await this.quizService.calcStudent(
        parseFloat(tryNum),
        parseFloat(id),
      );
      return { success: true, studentRes };
    } catch (err) {
      return { success: false, msg: err.message };
    }
  }

  @Post('calcClass/:tryNum/:courseNum/:groupNum')
  async calcClass(
    @Param('tryNum') tryNum: string,
    @Param('courseNum') courseNum: string,
    @Param('groupNum') groupNum: string,
  ) {
    try {
      const classResult = await this.quizService.calcClass(
        parseFloat(tryNum),
        parseFloat(courseNum),
        parseFloat(groupNum),
      );
      return { success: true, classResult };
    } catch (err) {
      return { success: false, msg: err.message };
    }
  }

  @Get('studentSemester/get')
  async getAllQuizesDoneInTheLastSemester() {
    try {
      const quiz = await this.quizService.getAllQuizesDoneInTheLastSemester();
      return { success: true, quiz };
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  @Get('studentSemester/:cNum/:gNum')
  async getResultsByGroupAndCourse(
    @Param('cNum') cNum: string,
    @Param('gNum') gNum: string,
  ) {
    try {
      const quiz = await this.quizService.getResultsByGroupAndCourse(
        parseInt(gNum, 10),
        parseInt(cNum, 10),
      );
      return { success: true, quiz };
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  @Get('quizByCnum/:cNum')
  async getQuizByCourseNum(@Param('cNum') cNum: string) {
    try {
      const quiz = await this.quizService.getQuizByCourseNum(
        parseFloat(cNum),
      );
      return { success: true, quiz };
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  @Get('unique/Quizes')
  async getAllUniqueQuizzes() {
    try {
      const classResults = await this.quizService.getAllUniqueQuizzes();
      return { success: true, classResults };
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}
