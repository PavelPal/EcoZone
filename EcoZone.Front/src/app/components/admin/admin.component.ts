import { Component, Input } from '@angular/core';
import { Link } from '../../models/link';

@Component({
    selector: 'admin',
    templateUrl: './app/components/admin/admin.component.html'
})
export class AdminComponent {
    private links: Array<Link> = [
        new Link('Dashboard', './dashboard', 'fa-tachometer'),
        new Link('Articles', './articles', 'fa-book'),
        new Link('Users', './users', 'fa-users'),
        new Link('Subscribers', './subscribers', 'fa-envelope'),
        new Link('Comments', './comments', 'fa-comments'),
        new Link('Settings', './settings', 'fa-sliders')
    ];
}