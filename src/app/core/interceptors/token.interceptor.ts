import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../services/token.service";
import { UserService } from "../services/user.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token: string | undefined = this.tokenService.token();
        if (!!token) {
            request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
    
}