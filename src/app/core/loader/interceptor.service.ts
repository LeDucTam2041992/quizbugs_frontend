import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoaderService} from "./loader.service";
import {finalize} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor(private loaderService: LoaderService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.isLoading.next(true);
        let token = localStorage.getItem('token');
        if (token !== null) {
            req = req.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }
        return next.handle(req).pipe(
            finalize(() => {
                this.loaderService.isLoading.next(false);
            })
        )
    }
}
