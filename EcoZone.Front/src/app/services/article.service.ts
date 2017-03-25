import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';
import { ArticleInfo } from '../models/article/article-info';
import { Article } from '../models/article/article';

@Injectable()
export class ArticleService {

    constructor(private http: Http, private configuration: Configuration) { }

    // public get = (skip, take): Observable<ArticleInfo[]> => {
    //     let params = new URLSearchParams();
    //     params.set('skip', skip);
    //     params.set('take', take);
    //     return this.http.get(this.configuration.ApiServer + 'articles', { search: params })
    //         .map(data => data.json());
    // }
    public get = (skip: number, take: number): ArticleInfo[] => {
        let array: ArticleInfo[] = [];
        for (let i: number = skip; i < take; i++) {
            array.push(new ArticleInfo(i,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                'Distinctio sapiente ratione officiis laboriosam, ' +
                'ipsum quod aperiam illum eos ad hic dolorum non nam ' +
                'voluptatem eveniet alias architecto fuga corrupti. Quos.',
                '',
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                new Date()));
        }
        return array;
    }

    public getArticle = (id: number): Article => {
        return new Article(id);
    }

    public count = (): number => {
        return Math.floor(Math.random() * 100);
    }
}