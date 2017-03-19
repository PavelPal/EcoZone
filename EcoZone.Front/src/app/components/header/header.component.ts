import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'main-header',
    templateUrl: './app/components/header/header.component.html'
})
export class HeaderComponent {
    @Input() title: string;
    @Input() subtitle: string;
    @Input() homeLink: boolean;

    constructor(private router:Router) {}

    toHome(): void {
        this.router.navigate(['/home']);
    }
}