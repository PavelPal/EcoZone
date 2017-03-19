import { Component, Input } from "@angular/core";
import { Link } from "../../models/link";
import { Router } from "@angular/router";

@Component({
    selector: 'admin',
    templateUrl: './app/components/admin/admin.component.html'
})
export class AdminComponent {
    private links: Array<Link> = [
        new Link("Dashboard", "dashboard"),
        new Link("Users", "users"),
        new Link("Settings", "settings")
    ];

    constructor(private router:Router) {}

    toHome(): void {
        this.router.navigate(['/home']);
    }
}