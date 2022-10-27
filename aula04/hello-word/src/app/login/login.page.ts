import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private LoginService: LoginService)  { }

  public userEmail: String = null
  public userPassword: String = null

  ngOnInit() {
  }

  goToPage() {
    this.router.navigate(['/register']);
  }

  Login() {
    const data = {
      userEmail: this.userEmail,
      userPassword: this.userPassword
    }
    this.LoginService.userLogin(data).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/regioes']);
    });
  }

}
