import {Component, OnInit} from "@angular/core";
import {ArticleService} from "../../services/article.service";
import {ArticleInfo} from "../../models/article/articleInfo";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Component({
    selector: 'app-home',
    templateUrl: './app/home/home.html'
})
export class Home implements OnInit {
    private popularNews: Array<ArticleInfo> = [];

    constructor(private _dataService: ArticleService) {
    }

    ngOnInit(): void {
        this._dataService
            .getPopular()
            .subscribe((data: Array<ArticleInfo>) => this.popularNews = data,
                error => console.log(error),
                () => console.log("getPopular() complete from init"));
    }
}