import { Controller, Get, Post, Param } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('VanHilleQuiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  // Specific GET routes before parameterised ones

  // GET /VanHilleQuiz/questions
  @Get('questions')
  async getAllQuestions() {
    try {
      const questions = await this.quizService.getAllQuestions();
      return { success: true, questions };
    } catch (err) {
      return { success: false, msg: 'אין שאלות' };
    }
  }

  // GET /VanHilleQuiz/studentSemester/get
  @Get('studentSemester/get')
  async getAllQuizesDoneInTheLastSemester() {
    try {
      const quiz = await this.quizService.getAllQuizesDoneInTheLastSemester();
      return { success: true, quiz };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // GET /VanHilleQuiz/unique/Quizes
  @Get('unique/Quizes')
  async getAllUniqueQuizes() {
    try {
      const classResults = await this.quizService.getAllUniqueQuizes();
      return { success: true, classResults };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // GET /VanHilleQuiz/studentSemester/:cNum/:gNum
  @Get('studentSemester/:cNum/:gNum')
  async getResultsByGroupNumAndCourseNum(
    @Param('cNum') cNum: string,
    @Param('gNum') gNum: string,
  ) {
    try {
      const quiz = await this.quizService.getResultsByGroupNumAndCourseNum(gNum, cNum);
      return { success: true, quiz };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // GET /VanHilleQuiz/quizByCnum/:cNum
  @Get('quizByCnum/:cNum')
  async getQuizByCourseNum(@Param('cNum') cNum: string) {
    try {
      const quiz = await this.quizService.getQuizByCourseNum(cNum);
      return { success: true, quiz };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // GET /VanHilleQuiz/:id — single question by Qid
  @Get(':id')
  async getQuestion(@Param('id') id: string) {
    try {
      const question = await this.quizService.getQuestion(id);
      return { success: true, question };
    } catch (err) {
      return { success: false, msg: 'לא נמצאה שאלה' };
    }
  }

  // POST /VanHilleQuiz/calcStudent/:tryNum/:id
  @Post('calcStudent/:tryNum/:id')
  async calcStudentResult(
    @Param('tryNum') tryNum: string,
    @Param('id') id: string,
  ) {
    try {
      const studentRes = await this.quizService.createStudentResult(id, tryNum);
      return { success: true, studentRes };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // POST /VanHilleQuiz/calcClass/:tryNum/:courseNum/:groupNum
  @Post('calcClass/:tryNum/:courseNum/:groupNum')
  async calcClassResult(
    @Param('tryNum') tryNum: string,
    @Param('courseNum') courseNum: string,
    @Param('groupNum') groupNum: string,
  ) {
    try {
      const classResult = await this.quizService.createAndSaveClassResults(
        tryNum,
        courseNum,
        groupNum,
      );
      return { success: true, classResult };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }
}
