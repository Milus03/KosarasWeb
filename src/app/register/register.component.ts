import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  email: string = ''
  password: string = ''
  lastname: string = ''
  firstname: string = ''
  nickname: string = ''

  constructor(private auth:AuthService) { }

  register() {
    this.auth.register(this.email, this.password)
      .then(res => alert("Sikeres regisztráció!"))
      .catch(err => alert("Hiba történt!"))
  }

  registerWithGoogle() {
    this.auth.loginWithGoogle()

  }
}
