import { User } from './user';

export class Comment {

    constructor(
        private id: number,
        private body: string,
        private date,
        private user: User) { }
}