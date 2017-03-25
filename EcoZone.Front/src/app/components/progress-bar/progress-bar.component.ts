import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
    selector: 'progress-bar',
    templateUrl: './app/components/progress-bar/progress-bar.component.html'
})
export class ProgressBar {
    private isActive: boolean = false;

    constructor(private router: Router) {
        router.events.subscribe((navigationState) => {
            if (navigationState instanceof NavigationStart) {
                this.isActive = true;
            } else if (navigationState instanceof NavigationEnd) {
                this.isActive = false;
            }
        });
    }
}