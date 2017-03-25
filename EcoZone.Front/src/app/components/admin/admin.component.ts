import { Component, OnInit } from '@angular/core';
import { Link } from '../../models/link';
import { AdminService } from '../../services/admin.service';

@Component({
    selector: 'admin',
    templateUrl: './app/components/admin/admin.component.html'
})
export class AdminComponent implements OnInit {
    private links: Array<Link>;

    constructor(
        private adminService: AdminService) { }

    public ngOnInit() {
        this.links = this.adminService.getNavItems();
    }
}