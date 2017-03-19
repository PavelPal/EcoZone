import { Component, Input } from '@angular/core';

@Component({
    selector: 'main-header',
    templateUrl: './app/components/header/header.component.html'
})
export class HeaderComponent {
    @Input() private title: string;
    @Input() private subtitle: string;
    @Input() private homeLink: boolean;
}