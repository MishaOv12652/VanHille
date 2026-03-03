import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Req,
} from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('VHS')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  // GET /VHS/ — students who finished in the last 3 hours
  @Get()
  getAllRecentStudents() {
    return this.studentsService
      .getAllUsersDoneTheQuizInTheLastThreeHours()
      .then((users) => ({ success: true, users }))
      .catch((err) => ({ success: false, msg: String(err) }));
  }

  // Specific GET routes must be declared before parameterised ones

  // GET /VHS/get/unique/courseNums
  @Get('get/unique/courseNums')
  async getAllUniqueCourseNums() {
    try {
      const result = await this.studentsService.getAllUniqueCourseNum();
      return { success: true, result };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // GET /VHS/get/unique/corresponding/groupNums/:courseNum
  @Get('get/unique/corresponding/groupNums/:courseNum')
  async getCorrespondingGroupNums(@Param('courseNum') courseNum: string) {
    try {
      const result = await this.studentsService.getCorrespondingGroupNums(courseNum);
      return { success: true, result };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // GET /VHS/students/:sDate/:fDate
  @Get('students/:sDate/:fDate')
  async findStudentsBetweenDates(
    @Param('sDate') sDate: string,
    @Param('fDate') fDate: string,
  ) {
    try {
      const students = await this.studentsService.findStudentsBetweenDates(sDate, fDate);
      return { success: true, students };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // GET /VHS/:courseNum/:groupNum
  @Get(':courseNum/:groupNum')
  async getStudentsByCourseAndGroup(
    @Param('courseNum') courseNum: string,
    @Param('groupNum') groupNum: string,
  ) {
    try {
      const students = await this.studentsService.getStudentsByCourseAndGroupNum(
        courseNum,
        groupNum,
      );
      return { success: true, students };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // GET /VHS/:id — must be last single-param GET
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    try {
      const user = await this.studentsService.getUserById(id);
      return { success: true, user };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // POST /VHS/register
  @Post('register')
  async register(
    @Body() body: { ID: number; groupNum: number; courseNum: number },
  ) {
    try {
      await this.studentsService.addUser(body);
      return { success: true, msg: 'רישום הצליח' };
    } catch (err) {
      return { success: false, msg: 'רישום כשל' };
    }
  }

  // POST /VHS/calc/:tryNum/:id/<arr1>/<arr2>/...
  // The correct-answers array is passed as variadic path segments.
  // We read the full URL and extract everything after the student ID.
  @Post('calc/:tryNum/:id/*')
  async saveCorrectAnsArrPerDiff(
    @Param('tryNum') tryNum: string,
    @Param('id') id: string,
    @Req() req: any,
  ) {
    try {
      // req.path = "/VHS/calc/{tryNum}/{id}/val1/val2/..."
      const parts: string[] = req.path.split('/').filter(Boolean);
      const calcIndex = parts.indexOf('calc');
      const arrparams = parts.slice(calcIndex + 3); // skip 'calc', tryNum, id
      const user = await this.studentsService.saveCorrectAnsArrPerDiff(
        tryNum,
        id,
        arrparams,
      );
      return { success: true, user };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // POST /VHS/nullifyAnswers/:id/:tryNum
  @Post('nullifyAnswers/:id/:tryNum')
  async nullifyAnswers(
    @Param('id') id: string,
    @Param('tryNum') tryNum: string,
  ) {
    try {
      const student = await this.studentsService.nulifyAnswersIfClosedBrowser(id, tryNum);
      return { success: true, student };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // POST /VHS/updateGroupNum/:id/:groupNum
  @Post('updateGroupNum/:id/:groupNum')
  async updateGroupNum(
    @Param('id') id: string,
    @Param('groupNum') groupNum: string,
  ) {
    try {
      const updatedStudent = await this.studentsService.updateGroupNumOfUser(id, groupNum);
      return { success: true, updatedStudent };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  // PUT /VHS/:id/:ansNum/:qnumber/:tryNum
  @Put(':id/:ansNum/:qnumber/:tryNum')
  async saveUserAns(
    @Param('id') id: string,
    @Param('ansNum') ansNum: string,
    @Param('qnumber') qnumber: string,
    @Param('tryNum') tryNum: string,
  ) {
    try {
      const user = await this.studentsService.saveUserAns(id, ansNum, qnumber, tryNum);
      return { success: true, AnswerLen: user };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }
}
