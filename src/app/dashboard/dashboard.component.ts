import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DashboardDataService } from './dashboard-data.service';
import { TradeAction } from './trade-action-model';
import { Observable } from 'rxjs';
import { Dashboard } from './dashboard-model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    myList: TradeAction[] = [];
    dashboard : Observable<Dashboard>
    ngOnInit(): void {
        // this.dashboard = this.dashboardDataService.dashboard;
        // this.dashboardDataService.loadAll();
        // this.dashboard.subscribe(dashboard => {
        //     const test = [...dashboard.tradeActions];
        //     this.myList = test;
        // });
    }

    miniCardData = [{ title: 'title', textValue: 'textValue', value: '3', color: 'red', percentValue: '30' },
    { title: 'title', textValue: 'textValue', value: '3', color: 'red', percentValue: '30' },
    { title: 'title', textValue: 'textValue', value: '3', color: 'red', percentValue: '30' },
    { title: 'title', textValue: 'textValue', value: '3', color: 'red', percentValue: '30' }];


    constructor(private dashboardDataService: DashboardDataService) { }
}
