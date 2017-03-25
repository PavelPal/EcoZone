import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { AuthData } from '../../models/models';

@Component({
    selector: 'login',
    templateUrl: './app/components/login/login.component.html'
})
export class LoginComponent implements OnInit {
    private model: AuthData = new AuthData();
    private loading: boolean = false;
    private error: string = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    public ngOnInit(): void {
        this.authenticationService.logout();
    }

    private login() {
        this.loading = true;
        this.authenticationService.login(this.model)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}