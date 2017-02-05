import {Component} from "@angular/core";
import {MdDialog} from "@angular/material";
import {SearchComponent} from "./components/search/search.component";

@Component({
    selector: "app",
    host: {'(window:scroll)': 'isFixed($event)'},
    templateUrl: "./app/app.html"
})
export class AppComponent {
    private isFixedNavigation: boolean = false;

    constructor(public dialog: MdDialog) {
    }

    isFixed($event) {
        if ($event !== undefined) {
            this.isFixedNavigation = $event.target.body.scrollTop > 250;
        }
    }

    openSearchDialog() {
        this.dialog.open(SearchComponent, {
            height: '170px',
            width: '400px',
        });
    }
}