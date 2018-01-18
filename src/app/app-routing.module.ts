import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { AdminmanageComponent } from './adminmanage/adminmanage.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home' }, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, data: { title: 'About' }, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' }, canActivate: [AuthGuard] },
  {
    path: 'admin', data: { title: 'Admin' }, canActivate: [AuthGuard],
    children: [{ path: 'edit', component: AdmineditComponent, data: { title: 'Edit' } },
    { path: 'manage', component: AdminmanageComponent, data: { title: 'Manage' } }]
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
