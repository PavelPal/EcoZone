import { Component, Input } from '@angular/core';
import { AdminCard } from '../../../models/admin-card';

@Component({
    selector: 'admin-cards',
    templateUrl: './app/components/admin/cards/admin-cards.component.html'
})
export class AdminCardsComponent {
    @Input() private cards: AdminCard[];
}