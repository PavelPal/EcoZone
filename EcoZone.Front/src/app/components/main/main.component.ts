import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { SearchComponent } from './search/search.component';

@Component({
    selector: 'main',
    providers: [MdDialog],
    host: { '(window:scroll)': 'isFixed($event)' },
    templateUrl: './app/components/main/main.component.html'
})
export class MainComponent {
    private isFixedNavigation: boolean = false;

    constructor(public dialog: MdDialog) { }

    private isFixed($event) {
        if ($event !== undefined) {
            this.isFixedNavigation = $event.target.body.scrollTop > (window.screen.height / 1.5);
        }
    }

    private openSearchDialog() {
        this.dialog.open(SearchComponent, {
            height: '170px',
            width: '400px',
        });
    }
}