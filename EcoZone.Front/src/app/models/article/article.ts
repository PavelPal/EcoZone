import { User } from '../user';
import { Comment } from '../comment';
import { Tag } from '../tag';
import { Like } from '../like';

export class Article {
    private id: number;
    private title: string;
    private description: string;
    private source: string;
    private imagePath: string;
    private views: number;
    private date;
    private isApproved: boolean;
    private user: User;
    private tags: Array<Tag>;
    private comments: Array<Comment>;
    private likes: Array<Like>;
}