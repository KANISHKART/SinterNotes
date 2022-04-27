import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private formBuild:FormBuilder) {
    this.loginForm= this.formBuild.group({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required)
    });
   }

  ngOnInit(): void {
  }

  login(){
      alert("in login!!")
  }

  onReset(){
    this.loginForm.reset();
  }

}
