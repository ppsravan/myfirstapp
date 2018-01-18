import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
const ServiceUrl = 'http://vasudevkumaran.com/ang/';


@Injectable()
export class RegisterService {
  private userData: any;
  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem('userToken')) {
      this.userData = JSON.parse(localStorage.getItem('userToken'));
    }
  }

  public registerUser(path: any, userData: any): Observable<any> {
    const headerParams: HttpHeaders = new HttpHeaders();
    headerParams.append('Content-Type', 'application/json');
    return this.httpClient.post(ServiceUrl + path, userData, { headers: headerParams });
  }

  public loginUser(userId: string, password: string): Observable<any> {
    const loginDetails = {
      username: userId,
      password: password
    };
    const authenticationDetails = this.postRequest('login', loginDetails);
    authenticationDetails.subscribe(response => {
      if (response.result === 'OK') {
        this.userData = response.data[0];
        localStorage.setItem('userToken', JSON.stringify(this.userData));
      }
    });
    return authenticationDetails;
  }

  get userName(): string {
    if (this.userData != null) {
      return this.userData.user_full_name;
    }
    return 'Guest';
  }

  get isLogged(): boolean {
    return this.userData != null;
  }

  public logout() {
    this.userData = null;
    localStorage.removeItem('userToken');
  }

  private postRequest(path: string, data: any): Observable<any> {
    const headerParams: HttpHeaders = new HttpHeaders();
    headerParams.append('Content-Type', 'application/json');
    return this.httpClient.post(ServiceUrl + path, data, { headers: headerParams });

  }
}
