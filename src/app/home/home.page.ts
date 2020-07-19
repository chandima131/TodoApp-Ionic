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


  // error_messages = {
  //   'email':[
  //     { type: 'minlength', message: 'Email must be at least 5 characters long.' },
  //   ],
  // }
 
//   'password':[
// 		{ type: 'minlength', message: 'Password must be at least 5 characters long.' },
// 		{ type: 'maxlength', message: 'Password cannot be more than 25 characters long.' },
// 		//{ type: 'pattern', message: 'Your Password must contain only numbers and letters.' },
    
//   ],
// }





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
    this.router.navigate(['todo-list']);
    }
    else{

      this.successMessage = 'Wrong User Name or Password';
      console.log("error username and password")
      
    }
  }

 



}
