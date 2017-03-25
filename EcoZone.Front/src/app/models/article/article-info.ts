export class ArticleInfo {

    constructor(
        private id: number,
        private title: string,
        private description: string,
        private imagePath: string,
        private views: number,
        private comments: number,
        private date) {
    }
}