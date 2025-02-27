import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermekekComponent } from './termekek/termekek.component';
import { UserComponent } from './user/user.component';
import { CipokComponent } from './cipok/cipok.component';
import { PoszterekComponent } from './poszterek/poszterek.component';
import { MezekComponent } from './mezek/mezek.component';
import { PalankokComponent } from './palankok/palankok.component';
import { LabdakComponent } from './labdak/labdak.component';
import { KosarComponent } from './kosar/kosar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AszfComponent } from './aszf/aszf.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "termekek", component: TermekekComponent},
  {path: "profil", component: UserComponent},
  {path: "cipok", component: CipokComponent},
  {path: "poszterek", component: PoszterekComponent},
  {path: "mezek", component: MezekComponent},
  {path: "palankok", component: PalankokComponent},
  {path: "labdak", component: LabdakComponent},
  {path: "kosar", component: KosarComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "aszf", component: AszfComponent},
  {path: "", redirectTo:"home", pathMatch:'full'},
  {path: "**", redirectTo:"home", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
