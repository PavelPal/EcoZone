import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthData } from '../models/models';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        let user = JSON.parse(localStorage.getItem('user'));
        this.token = user && user.token;
    }

    public login(model: AuthData): Observable<boolean> {
        // rewrite
        return this.http.post('/api/login', model)
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('user', JSON.stringify(model));
                    return true;
                } else {
                    return false;
                }
            });
    }

    public logout(): void {
        this.token = null;
        localStorage.removeItem('user');
    }
}