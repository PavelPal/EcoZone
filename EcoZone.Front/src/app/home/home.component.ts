import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './app/home/home.html'
})
export class Home implements OnInit {
    ngOnInit(): void {
        this.popularNews.push(new Article('Lorem ipsum dolor sit', 15, 30));
        this.popularNews.push(new Article('Lorem ipsum dolor sit', 86, 85));
        this.popularNews.push(new Article('Lorem ipsum dolor sit', 2, 70));
        this.popularNews.push(new Article('Lorem ipsum dolor sit', 95, 14));
        this.popularNews.push(new Article('Lorem ipsum dolor sit', 12, 142));
        this.popularNews.push(new Article('Lorem ipsum dolor sit', 157, 88));
        this.popularNews.push(new Article('Lorem ipsum dolor sit', 1, 94));
    }

    private popularNews: Array<Article> = [];
}

export class Article {
    private title: string;
    private description: string;
    private views: number;
    private comments: number;
    private date;

    constructor(_title: string, _views: number, _comments: number) {
        this.title = _title;
        this.views = _views;
        this.comments = _comments;
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur dolor eos ' +
            'explicabo fugiat, ipsum laborum minus mollitia nam natus officia pariatur, perspiciatis possimus ' +
            'provident quaerat quas quibusdam quis quisquam repudiandae rerum saepe sit soluta tempore vel, veniam ' +
            'voluptate voluptatum. Corporis debitis deleniti deserunt dicta dolor eius itaque laudantium, minus non ' +
            'perferendis rem rerum sed temporibus. Atque beatae blanditiis consectetur corporis, delectus dolores ' +
            'dolorum et ex excepturi fugiat hic labore minima modi natus nostrum obcaecati odio quia quo recusandae ' +
            'sint suscipit temporibus tenetur voluptate! Debitis eius, velit. Ea excepturi itaque, iusto nesciunt ' +
            'odit quae unde veritatis! Animi molestias nihil rerum!';
        this.date = new Date();
    }
}