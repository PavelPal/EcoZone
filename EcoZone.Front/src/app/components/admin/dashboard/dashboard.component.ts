import { Component, OnInit } from '@angular/core';
import { AdminCard } from '../../../models/admin-card';
import { AdminService } from '../../../services/admin.service';

@Component({
    selector: 'dashboard',
    templateUrl: './app/components/admin/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    private cards: AdminCard[];

    constructor(
        private adminService: AdminService) { }

    public ngOnInit(): void {
        this.cards = this.adminService.getCards();
    }
}