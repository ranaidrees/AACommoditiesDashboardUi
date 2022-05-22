import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Dashboard } from './dashboard-model';
import { TradeAction } from './trade-action-model';
import { cloneDeep } from 'lodash';
import { Indicators } from './Indicators/indicators-model';

@Injectable({
    providedIn: 'root'
})
export class DashboardDataService {
//    private dashboard: BehaviorSubject<Dashboard>;
private indicators: Subject<Indicators>;

    private dataStore: {
        indicators: Indicators;
    };

    constructor(private http: HttpClient) {
        this.dataStore = { indicators: {charts: null, metrics: null }};
        this.indicators = new Subject<Indicators>();
    }

    get indicatorsData(): Observable<Indicators> {
        return this.indicators.asObservable();
    }

    loadAll(): void {
        const indicatorsUrl = 'http://localhost:50000/api/indicators';

        this.http.get<Indicators>(indicatorsUrl)
            .subscribe(data => {
                this.dataStore.indicators = data;
              //  const clonedDatastore = cloneDeep(this.dataStore);
              //  this.indicators.next(clonedDatastore.indicators);
                this.indicators.next(this.dataStore.indicators);
            }, error => {
                console.log('Failed to fetch dashboard');
            });
    }
}
