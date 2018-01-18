import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
const ServiceUrl = 'http://vasudevkumaran.com/ang/';


@Injectable()
export class RegisterService {
  constructor(private httpClient: HttpClient) { }

  public registerUser(path: any, userData: any): Observable<any> {
    const headerParams: HttpHeaders = new HttpHeaders();
    headerParams.append('Content-Type', 'application/json');
    return this.httpClient.post(ServiceUrl + path, userData, { headers: headerParams });
  }
}
