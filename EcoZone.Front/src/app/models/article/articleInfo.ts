export class ArticleInfo {
    private id: number;
    private title: string;
    private description: string;
    private imagePath: string;
    private views: number;
    private comments: number;
    private date;

    constructor() {
        this.id = 0;
        this.title = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';
        this.description = 'Distinctio sapiente ratione officiis laboriosam, ' +
                           'ipsum quod aperiam illum eos ad hic dolorum non nam ' +
                           'voluptatem eveniet alias architecto fuga corrupti. Quos.';
        this.imagePath = '';
        this.views = Math.floor(Math.random() * 100);
        this.comments = Math.floor(Math.random() * 100);
        this.date = new Date();
    }
}