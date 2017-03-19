import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { ArticleInfo } from '../../../models/article/articleInfo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'home',
    templateUrl: './app/components/main/home/home.component.html'
})
export class HomeComponent implements OnInit {
    private title: string = 'EcoZone';
    private subtitle: string = 'latest environmental news';
    private articles: Array<ArticleInfo> = [];
    private canLoad: boolean = true;
    private isLoading: boolean = false;
    private skip: number = 0;
    private take: number = 11;

    constructor(private _dataService: ArticleService) {}

    public ngOnInit():void {
        if (!this.isLoading) {
            this.isLoading = true;
            for (let i = 0; i < 20; i++) {
                this.articles.push(new ArticleInfo());
            }
            // this._dataService
            //     .get(this.skip, this.take)
            //     .subscribe((data: Array<ArticleInfo>) => {
            //             this.setArticles(data);
            //             this.take = 12;
            //         },
            //         error => console.log(error),
            //         () => this.isLoading = false);
            this.isLoading = false;
        }
    }

    private setArticles = (data): void => {
        this.articles = this.articles.concat(data);
        this.skip += data.length;
        if (data.length < this.take) {
            this.canLoad = false;
        }
    }

    private loadMore = (): void => {
        if (this.canLoad && !this.isLoading) {
            this.isLoading = true;
            // this._dataService
            //     .get(this.skip, this.take)
            //     .subscribe((data: Array<ArticleInfo>) => this.setArticles(data),
            //         error => console.log(error),
            //         () => this.isLoading = false);
            this.isLoading = false;
        }
    }
}