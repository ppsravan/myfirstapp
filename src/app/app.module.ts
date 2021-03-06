import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Form, FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router/src/router_module';
import { AlertModule } from 'ngx-bootstrap';
import { AdminmanageComponent } from './adminmanage/adminmanage.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { RegisterService } from './register.service';
import { HttpClientModule, HttpClient, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HttpHeaderInterceptor } from './http-header-interceptor';
import { tr } from 'ngx-bootstrap/bs-moment/i18n/tr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AdminmanageComponent,
    AdmineditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    RegisterService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
