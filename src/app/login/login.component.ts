import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthUtilService } from './auth-util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  message;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private loginService: LoginService,
    private router: Router,
    private authUtil: AuthUtilService,
    private formBuilder: FormBuilder
  ) {
    iconRegistry.addSvgIcon('iconInput',sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-input-24px.svg'));
    iconRegistry.addSvgIcon('iconClose',sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-close-24px.svg'));
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  get f() {
    return this.loginForm.controls;
  }
  
  public login(): void {

    this.loginService
      .login(this.f.username.value, this.f.password.value)
      .subscribe(
        (data) => {
          console.log(data);
          localStorage.setItem('token', data);
          this.authUtil.currentTokenValue = data;
          // redireciona a view
          this.router.navigate(['/']);
        },
        (error) => {
          this.message = error;
        }
      );
  }
}
