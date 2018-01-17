import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router/src/router_module';
import { AlertModule } from 'ngx-bootstrap';
import { AdminmanageComponent } from './adminmanage/adminmanage.component';
import { AdmineditComponent } from './adminedit/adminedit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AdminmanageComponent,
    AdmineditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
