import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  successMessage: String = '';
  loginForm:FormGroup;

constructor(public formBuilder:FormBuilder,private router: Router) {
  this.loginForm = this.formBuilder.group({
  username: new FormControl(null, Validators.required),
  password: new FormControl(null, Validators.required)
});
}

 isValid(controlName) {
  return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }


  login()
  {
    console.log('username:',this.loginForm.value.username);
    console.log('password:',this.loginForm.value.password);
    if(this.loginForm.value.username=="chandima" && this.loginForm.value.password=="1234"){
    this.router.navigate(['todo-list']);  }
    else{
      this.successMessage = 'Wrong Username or Password';
      console.log("error username and password");
    }
  }
}
