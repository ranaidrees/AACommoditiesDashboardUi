import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dashboard } from './dashboard-model';
import { TradeAction } from './trade-action-model';
import { cloneDeep } from 'lodash';


@Injectable({
    providedIn: 'root'
})
export class DashboardDataService {
    private _dashboard: BehaviorSubject<Dashboard>;

    private dataStore: {
        dashboard: Dashboard;
    }

    constructor(private http: HttpClient) {
        this.dataStore = { dashboard: {drawDownYtd:1, pnlMetric:1, tradeActions:[]} };
        this._dashboard = new BehaviorSubject<Dashboard>({drawDownYtd:1, pnlMetric:1, tradeActions:[]});
    }

    get dashboard(): Observable<Dashboard> {
        return this._dashboard.asObservable();
    }

    loadAll() {
        const tradeActionUrl = 'http://localhost:50000/api/tradeactions'

        this.http.get<TradeAction[]>(tradeActionUrl)
            .subscribe(data => {
                this.dataStore.dashboard.tradeActions = data;
                this.dataStore.dashboard.pnlMetric = 1;
                this.dataStore.dashboard.drawDownYtd = 2;
                var clonedDatastore = cloneDeep(this.dataStore)
                this._dashboard.next(clonedDatastore.dashboard);
            }, error => {
                console.log("Failed to fetch dashboard")
            });
    }
}
