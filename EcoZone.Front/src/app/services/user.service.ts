import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Configuration } from '../app.constants';

@Injectable()
export class UserService {

    constructor(private http: Http, private configuration: Configuration) { }

    public count = (): number => {
        return Math.floor(Math.random() * 100);
    }
}