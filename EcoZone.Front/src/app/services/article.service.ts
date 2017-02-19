import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Configuration} from "../app.constants";
import {ArticleInfo} from "../models/article/articleInfo";

@Injectable()
export class ArticleService {

    constructor(private _http: Http, private _configuration: Configuration) {
    }

    public getAll = (): Observable<ArticleInfo[]> => {
        return this._http.get(this._configuration.ApiServer + 'articles')
            .map(data => data.json());
    }

    public getPopular = (): Observable<ArticleInfo[]> => {
        return this._http.get(this._configuration.ApiServer + 'articles/getPopular')
            .map(data => data.json());
    }
}