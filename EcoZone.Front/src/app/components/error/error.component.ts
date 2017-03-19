import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'error',
    templateUrl: './app/components/error/error.component.html'
})
export class ErrorComponent implements OnInit {
    @Input() private title: string = 'Error';
    @Input() private subtitle: string = 'we are so sorry';

    constructor(
        private route: ActivatedRoute,
        private router: Router) {}

    public ngOnInit() {
        this.subtitle = this.route.snapshot.data['subtitle'];
    }
}