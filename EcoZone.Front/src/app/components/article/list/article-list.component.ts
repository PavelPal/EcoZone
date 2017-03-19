import { Component, Input } from "@angular/core";
import { ArticleInfo } from "../../../models/article/articleInfo";

@Component({
    selector: 'article-list',
    templateUrl: './app/components/article/list/article-list.component.html'
})
export class ArticleListComponent {
    @Input() list: Array<ArticleInfo> = [];
}