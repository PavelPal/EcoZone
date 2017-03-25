import { Injectable } from '@angular/core';
import { AdminCard } from '../models/admin-card';
import { UserService } from './user.service';
import { ArticleService } from './article.service';
import { CommentService } from './comment.service';

@Injectable()
export class AdminService {
    constructor(
        private userService: UserService,
        private articleService: ArticleService,
        private commentService: CommentService) { }

    public getAdminCards = (): AdminCard[] => {
        return [
            new AdminCard('users', this.userService.count(), '#e84c3d'),
            new AdminCard('articles', this.articleService.count(), '#1abc9c'),
            new AdminCard('comments', this.commentService.count(), '#3598db')
        ];
    }
}