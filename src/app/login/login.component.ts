import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = ''
  password: string = ''

  constructor(private auth:AuthService) { }

  login() {
    if (!this.email || !this.password) {
      console.error("Adj meg egy e-mailt és egy jelszót!");
      return
    }
    this.auth.login(this.email, this.password)
      .then(res => console.log("Sikeres bejelentkezés!", res))
      .catch(err => console.error("Hiba történt!", err.message))
  }
  loginWithGoogle() {
    this.auth.loginWithGoogle()
      .then(res => console.log("Sikeres Google bejelentkezés!", res))
      .catch(err => console.error("Hiba történt!", err.message))
  }
}
