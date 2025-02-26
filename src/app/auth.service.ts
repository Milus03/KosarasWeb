import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) { }

  register(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.auth.signOut();
  }
  getCurrentUser() {
    return this.auth.authState;
  }
  loginWithGoogle() {
    return this.auth.signInWithPopup(new GoogleAuthProvider());
  }
}
