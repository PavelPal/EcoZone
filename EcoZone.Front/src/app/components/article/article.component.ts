import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article/article';
import { ArticleService } from '../../services/article.service';

@Component({
    selector: 'article',
    templateUrl: './app/components/article/article.component.html'
})
export class ArticleComponent implements OnInit {
    private article: Article;

    constructor(
        private activatedRoute: ActivatedRoute,
        private articleService: ArticleService) { }

    public ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            let userId = params['id'];
            this.article = this.articleService.getArticle(+params['id']);
        });
    }
}