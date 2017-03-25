import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Configuration } from '../app.constants';
import { Tag } from '../models/tag';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TagService {

    constructor(private http: Http, private configuration: Configuration) { }

    // public get = (skip, take): Observable<Tag[]> => {
    //     let params = new URLSearchParams();
    //     params.set('skip', skip);
    //     params.set('take', take);
    //     return this.http.get(this.configuration.ApiServer + 'tags', { search: params })
    //         .map(data => data.json());
    // }
    public get = (skip: number, take: number): Tag[] => {
        let array: Tag[] = [];
        for (let i: number = skip; i < take; i++) {
            array.push(new Tag(i, 'tag ' + i));
        }
        return array;
    }
}