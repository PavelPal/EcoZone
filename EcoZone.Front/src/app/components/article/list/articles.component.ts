import { Component, Input } from '@angular/core';
import { ArticleInfo } from '../../../models/article/articleInfo';

@Component({
    selector: 'article-list',
    templateUrl: './app/components/article/list/articles.component.html'
})
export class ArticlesComponent {
    @Input() private list: Array<ArticleInfo> = [];
}