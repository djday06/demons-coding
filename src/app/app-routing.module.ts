import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SessionViewComponent } from './session-view/session-view.component';
import { ProfileComponent } from './profile/profile.component';
import { FormViewComponent } from './form-view/form-view.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [

  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'sessions', component: SessionViewComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'form', component: FormViewComponent},
  { path: 'form/:id', component: FormViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
