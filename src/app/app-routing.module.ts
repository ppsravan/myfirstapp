import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { AdminmanageComponent } from './adminmanage/adminmanage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
  {
    path: 'admin', data: { title: 'Admin' },
    children: [{ path: '', component: AdmineditComponent, data: { title: 'Edit' } },
    { path: 'manage', component: AdminmanageComponent, data: { title: 'Manage' } }]
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
