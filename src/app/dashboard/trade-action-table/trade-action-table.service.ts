import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { TradeAction } from '../trade-action-model';

@Injectable({
    providedIn: 'root'
})
export class TradeActionTableService {
    private _tradeActions: BehaviorSubject<TradeAction[]>;

    private dataStore: {
        _tradeActions: TradeAction[];
    }

    constructor(private http: HttpClient) {
        this.dataStore = { _tradeActions: [] };
        this._tradeActions = new BehaviorSubject<TradeAction[]>([]);
    }

    get tradeActions(): Observable<TradeAction[]> {
        return this._tradeActions.asObservable();
    }

    loadAll(selectedModel?: string, selectedCommodity?: string) {
        const tradeActionUrl = 'http://localhost:50000/api/tradeactions'

        let params = new HttpParams();
        params = params.append('selectedModel', selectedModel);
        params = params.append('selectedCommodity', selectedCommodity);

        this.http.get<TradeAction[]>(tradeActionUrl, { params: params })
            .subscribe(data => {
                this._tradeActions.next(data);
            }, error => {
                console.log("Failed to fetch dashboard")
            });
    }
}
