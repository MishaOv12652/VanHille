import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { StudentsService } from '../application/students.service';

@Controller('VHS')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('register')
  async register(@Body() body: { ID: number; groupNum: number; courseNum: number }) {
    try {
      await this.studentsService.register(body.ID, body.groupNum, body.courseNum);
      return { success: true, msg: 'רישום הצליח' };
    } catch (err) {
      return { success: false, msg: 'רישום כשל' };
    }
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    try {
      const user = await this.studentsService.getById(parseFloat(id));
      return { success: true, user };
    } catch (err) {
      return { success: false, msg: 'כשלון במציאת משתמש' };
    }
  }

  @Put(':id/:ansNum/:qnumber/:tryNum')
  async saveAnswer(
    @Param('id') id: string,
    @Param('ansNum') ansNum: string,
    @Param('qnumber') qnumber: string,
    @Param('tryNum') tryNum: string,
  ) {
    try {
      const user = await this.studentsService.saveAnswer(
        parseFloat(id),
        ansNum,
        parseFloat(qnumber),
        parseFloat(tryNum),
      );
      return { success: true, AnswerLen: user };
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  @Get()
  async getAllDoneInLastThreeHours() {
    try {
      const users = await this.studentsService.getAllDoneInLastThreeHours();
      return { success: true, users };
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  @Post('calc/:tryNum/:id/*splat')
  async saveCorrectAnswersPerDiff(
    @Param('tryNum') tryNum: string,
    @Param('id') id: string,
    @Param('splat') splat: string[],
  ) {
    try {
      const user = await this.studentsService.saveCorrectAnswersPerDifficulty(
        parseFloat(tryNum),
        parseFloat(id),
        splat,
      );
      return { success: true, user };
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  @Get('students/:sDate/:fDate')
  async findBetweenDates(
    @Param('sDate') sDate: string,
    @Param('fDate') fDate: string,
  ) {
    try {
      const users = await this.studentsService.findBetweenDates(
        parseFloat(sDate),
        parseFloat(fDate),
      );
      return { success: true, students: users };
    } catch (err) {
      return {
        success: false,
        msg: 'שגיאה במציאת סטודנטים בין התאריכים שביקשתה',
      };
    }
  }

  @Post('nullifyAnswers/:id/:tryNum')
  async nullifyAnswers(
    @Param('id') id: string,
    @Param('tryNum') tryNum: string,
  ) {
    try {
      const student = await this.studentsService.nullifyAnswers(
        parseFloat(id),
        parseFloat(tryNum),
      );
      return { success: true, student };
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  @Post('updateGroupNum/:id/:groupNum')
  async updateGroupNum(
    @Param('id') id: string,
    @Param('groupNum') groupNum: string,
  ) {
    try {
      const updatedStudent = await this.studentsService.updateGroupNum(
        parseFloat(id),
        parseFloat(groupNum),
      );
      return { success: true, updatedStudent };
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  @Get(':courseNum/:groupNum')
  async getByCourseAndGroup(
    @Param('courseNum') courseNum: string,
    @Param('groupNum') groupNum: string,
  ) {
    try {
      const students = await this.studentsService.getByCourseAndGroup(
        parseFloat(courseNum),
        parseFloat(groupNum),
      );
      return { success: true, students };
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  @Get('get/unique/courseNums')
  async getAllUniqueCourseNums() {
    try {
      const result = await this.studentsService.getAllUniqueCourseNums();
      return { success: true, result };
    } catch (err) {
      return { success: false, msg: err.message };
    }
  }

  @Get('get/unique/corresponding/groupNums/:courseNum')
  async getGroupNumsForCourse(@Param('courseNum') courseNum: string) {
    try {
      const result = await this.studentsService.getGroupNumsForCourse(
        parseFloat(courseNum),
      );
      return { success: true, result };
    } catch (err) {
      return { success: false, msg: err.message };
    }
  }
}
