import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public userName: String = null
  public userEmail: String = null
  public userPassword: String = null
  public userUf: String = null
  public userCity: String = null
  
  constructor(private router: Router, private LoginService: LoginService) { }

  ngOnInit() {
  }
  
  goToPage() {
    this.router.navigate(['/login']);
  }
  
  Registe() {
    const data = {
      userName: this.userName,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
      userUf: this.userUf,
      userCity: this.userCity
    }
    this.LoginService.userRegister(data).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/login']);
    });
  }
}
