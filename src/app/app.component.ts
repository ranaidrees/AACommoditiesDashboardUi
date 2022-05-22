import { Component } from '@angular/core';
import { AuthenticationService } from './shared';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'AA Dashboard';
    username = null;
    authorized = false;
    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.isAuthorized().subscribe(x => {
            if (x === true) {
                this.authorized = true;
                this.username = localStorage.getItem('username') as string;
            }
        });
    }
    login(): void {
        this.authenticationService.login().subscribe(x=>{
            // location.reload();
        });

    }

    logout(): void {
        this.authenticationService.logout();
        location.replace('/');
    }
}
