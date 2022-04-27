import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm!: FormGroup

  constructor(private formBuild:FormBuilder) {
    this.registerForm= this.formBuild.group({
      username: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required),
      rpassword: new FormControl('',Validators.required)
    },
    {
      validator : this.ConfirmedValidator('password','rpassword')
    }
    );
   }

  ngOnInit(): void {
  }

  register(){
      alert("in login!!")
  }

  onReset(){
    this.registerForm.reset();
  }

  ConfirmedValidator(controlName: string, matchingControlName :string){
      return (formGroup:FormGroup)=>{
        const control= formGroup.controls[controlName];
        const matchingControl= formGroup.controls[matchingControlName];
        if(matchingControl.errors && !matchingControl.errors['confirmedValidator']){
          return;
        }
        if(control.value !==matchingControl.value){
            matchingControl.setErrors({ confirmedValidator: true})
        }else{
          matchingControl.setErrors(null);
        }

      }
  }
}
