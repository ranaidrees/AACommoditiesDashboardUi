import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DashboardDataService } from './dashboard-data.service';
import { TradeAction } from './trade-action-model';
import { Observable } from 'rxjs';
import { Dashboard } from './dashboard-model';
import { Indicators } from './Indicators/indicators-model';
import { ChartDataset } from './Indicators/charts/chart-dataset-model';
import { Metric } from './Indicators/metrics/metric-model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    myList: Indicators;
    indicators: Observable<Indicators>;
    pnlDataset: ChartDataset[];
    positionDataset: ChartDataset[];
    labels: string[];
    metrics: Metric[];

    ngOnInit(): void {
        this.indicators = this.dashboardDataService.indicatorsData;
        this.dashboardDataService.loadAll();
        this.indicators.subscribe(indicators => {
            this.pnlDataset = indicators.charts.datasets[0];
            this.positionDataset = indicators.charts.datasets[1];
            this.labels = indicators.charts.labels;
            this.metrics = indicators.metrics;
        });
    }

    constructor(private dashboardDataService: DashboardDataService) { }
}
