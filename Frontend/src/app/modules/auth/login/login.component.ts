import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formSubmitted : boolean = false;
  loginForm =  new  FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });
  constructor(private http : HttpClient, private router : Router) {}

  login() {
    this.formSubmitted = true;
    console.log(this.loginForm.value);
    this.http.post('http://localhost:3000/login', this.loginForm.value).subscribe({
      next : (response : any)=>{
          const token = response.token;
          localStorage.setItem('token', token);
          this.router.navigate(['user']);
          this.loginForm.reset();
          this.formSubmitted = false;
          alert(response.message)
      },
      error : (response : any)=>{
        this.formSubmitted = false;
      }
    })
  }
}
