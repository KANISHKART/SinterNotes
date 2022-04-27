import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  adduser(data :any){
    let reqHeaders=new HttpHeaders({
      'Content-type':'application/json'
    });
    const req=new HttpRequest('POST', environment.userController+'/persist',data,{
      headers: reqHeaders,
      reportProgress:true
    });


  }
}
