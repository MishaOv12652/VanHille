import { Injectable } from '@angular/core';

@Injectable()
export class SiteRegisterServiceService {

  constructor() { }



  validateRegister(SiteUser){
    if(SiteUser.username == undefined || SiteUser.email == undefined || SiteUser.password == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
