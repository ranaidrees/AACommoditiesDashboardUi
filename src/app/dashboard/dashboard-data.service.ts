import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Indicators } from './Indicators/indicators-model';
import { AuthenticationService } from '../shared';

@Injectable({
    providedIn: 'root'
})
export class DashboardDataService {
    private indicators: Subject<Indicators>;

    private dataStore: {
        indicators: Indicators;
    };

    constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
        this.dataStore = { indicators: { charts: null, metrics: null } };
        this.indicators = new Subject<Indicators>();
    }

    get indicatorsData(): Observable<Indicators> {
        return this.indicators.asObservable();
    }

    loadAll(): void {
        // const indicatorsUrl = 'http://localhost:50000/api/indicators';

        const indicatorsUrl = 'https://commoditydashboard.azurewebsites.net/api/indicators';


        // Refactor to AuthInterceptor
        const token = this.authenticationService.getAccessToken();
        const httpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + token);
        const httpOptions = {
            headers: httpHeaders
        };
        this.http.get<Indicators>(indicatorsUrl, httpOptions)
            .subscribe(data => {
                this.dataStore.indicators = data;
                this.indicators.next(this.dataStore.indicators);
            }, error => {
                console.log('Failed to fetch dashboard');
            });
    }
}
