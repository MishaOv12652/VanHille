import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class QuestionsserviceService {

  constructor(private http:Http) { }

  getUser(ID:Number){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3050/VHS/'+ID,{headers:headers}).map(res=>res.json());
    //return this.http.get('VHS/'+ID,{headers:headers}).map(res=>res.json());
  }

  getAllQuestions(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
     return this.http.get('http://localhost:3050/VanHilleQuiz/questions',{headers:headers}).map(res=>res.json());
   //return this.http.get('VanHilleQuiz/questions',{headers:headers}).map(res=>res.json());
  }

  saveCorrectAnsPerDiff(id:Number,arr:any,tryNum:Number){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3050/VHS/calc/' + tryNum  +  '/' + id  +  '/' + arr ,{headers:headers}).map(res=>res.json());
    //return this.http.post('/VHS/calc/' + tryNum  +  '/' + id  +  '/' + arr,{headers:headers}).map(res=>res.json());
  }

  getNextQuestion(id:String){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3050/VanHilleQuiz/'+id,{headers:headers})
     .map(res=>res.json());
    //  return this.http.get('VanHilleQuiz/'+id,{headers:headers})
    //  .map(res=>res.json());
  }

  saveUserAnswer(id:Number,ansNum:Number,qnumber:Number,tryNum:Number){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3050/VHS/'+id+'/'+ansNum + '/' + qnumber + '/' + tryNum,{headers:headers})
      .map(res=>res.json());
    // return this.http.put('VHS/'+id+'/'+ansNum + '/' + qnumber + '/' + tryNum,{headers:headers})
    //  .map(res=>res.json());
  }

  calcUser(id:Number){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3050/VHS/calc/'+id,{headers:headers})
      .map(res=>res.json());
    // return this.http.post('VHS/calc/'+id,{headers:headers})
    // .map(res=>res.json());
  }
}
