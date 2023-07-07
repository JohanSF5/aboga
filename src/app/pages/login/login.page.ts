import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  GoToPass() {
    this.router.navigate(['/forgot-password'])
  }

  GoToSignup() {
    this.router.navigate(['/signup'])
  }

  GoToHome() {
    this.router.navigate(['/home'])
  }

  GoToInicio() {
    this.router.navigate(['/inicio'])
  }
}
