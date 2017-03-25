import { Injectable } from '@angular/core';
import { AdminCard } from '../models/admin-card';
import { UserService } from './user.service';
import { ArticleService } from './article.service';
import { CommentService } from './comment.service';
import { Link } from '../models/link';

@Injectable()
export class AdminService {
    constructor(
        private userService: UserService,
        private articleService: ArticleService,
        private commentService: CommentService) { }

    public getNavItems = (): Array<Link> => {
        return [
            new Link('Dashboard', './dashboard', 'fa-tachometer'),
            new Link('Articles', './articles', 'fa-book'),
            new Link('Users', './users', 'fa-users'),
            new Link('Subscribers', './subscribers', 'fa-envelope'),
            new Link('Comments', './comments', 'fa-comments'),
            new Link('Settings', './settings', 'fa-sliders')
        ];
    }

    public getCards = (): Array<AdminCard> => {
        return [
            new AdminCard('users', this.userService.count(), '#e84c3d'),
            new AdminCard('articles', this.articleService.count(), '#1abc9c'),
            new AdminCard('comments', this.commentService.count(), '#3598db')
        ];
    }
}