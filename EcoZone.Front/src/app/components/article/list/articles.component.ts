import { Component, Input } from '@angular/core';
import { ArticleInfo } from '../../../models/article/article-info';
import { Router } from '@angular/router';

@Component({
    selector: 'article-list',
    templateUrl: './app/components/article/list/articles.component.html'
})
export class ArticlesComponent {
    @Input() private list: Array<ArticleInfo> = [];
    @Input() private routePrefix: string = '';

    constructor(private router: Router) { }

    private goToArticle = (id): void => {
        this.router.navigate(['/news/article', id]);
    }
}