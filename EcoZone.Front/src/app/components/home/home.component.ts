import {Component, OnInit} from "@angular/core";
import {Article} from "../../models/article";
import {ArticleService} from "../../services/articleService";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Component({
    selector: 'app-home',
    providers: [ArticleService],
    templateUrl: './app/home/home.html'
})
export class Home implements OnInit {
    private popularNews: Array<Article> = [];

    constructor(private _dataService: ArticleService) {
    }

    ngOnInit(): void {
        this._dataService
            .getPopular()
            .subscribe((data: Array<Article>) => this.popularNews = data,
                error => console.log(error),
                () => console.log("getPopular() complete from init"));
    }
}