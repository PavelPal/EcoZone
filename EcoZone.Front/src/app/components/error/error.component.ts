import { Component, Input } from "@angular/core";

@Component({
    selector: 'error',
    templateUrl: './app/components/error/error.component.html'
})
export class ErrorComponent {
    @Input() title: string = "Error";
    @Input() subtitle: string = "we are so sorry";
}