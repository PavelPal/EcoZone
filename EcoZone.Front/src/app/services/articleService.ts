import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Article} from "../models/article";
import {Configuration} from "../app.constants";

@Injectable()
export class ArticleService {

    constructor(private _http: Http, private _configuration: Configuration) {
    }

    public getAll = (): Observable<Article[]> => {
        return this._http.get(this._configuration.ApiServer + 'articles')
            .map(data => data.json());
    }

    public getPopular = (): Observable<Article[]> => {
        return this._http.get(this._configuration.ApiServer + 'articles/getPopular')
            .map(data => data.json());
    }
}