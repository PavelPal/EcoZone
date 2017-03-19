import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { ArticleInfo } from "../models/article/articleInfo";

@Injectable()
export class ArticleService {

    constructor(private _http: Http, private _configuration: Configuration) {}

    public get = (skip, take): Observable<ArticleInfo[]> => {
        let params = new URLSearchParams();
        params.set('skip', skip);
        params.set('take', take);
        return this._http.get(this._configuration.ApiServer + 'articles', { search: params })
            .map(data => data.json());
    }
}