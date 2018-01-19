import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const alteredRequest = req.clone(
            {
                headers: req.headers.set('Content-Type', 'application/json')
            }
        );

        return next.handle(alteredRequest).catch((error, caught) => {
            // Implementing logging for catching all http errors and logging them
            console.log(`Error Occured ${error}`);
            return Observable.throw(error);
        }) as any;
    }
}
