import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { fail } from 'assert';
import { Router } from '@angular/router';
import { tr } from 'ngx-bootstrap/bs-moment/i18n/tr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  loginSuccess = true;

  constructor(private formBuilder: FormBuilder, private service: RegisterService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      loginId: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required]
    });
    if (service.isLogged) {
      this.router.navigate(['/home']);
    }
  }

  get loginId() { return this.loginForm.get('loginId'); }

  get password() { return this.loginForm.get('password'); }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.service.loginUser(this.loginId.value, this.password.value).subscribe(result => {
        if (result.result === 'FAILED') {
          this.loginSuccess = false;
        } else {
          this.router.navigate(['home']);
        }
        console.log(result);
      });
    }
  }

}
