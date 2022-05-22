import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataset } from '../chart-dataset-model';

@Component({
    selector: 'app-historical-position-chart',
    templateUrl: './historical-position-chart.component.html',
    styleUrls: ['./historical-position-chart.component.scss']
})
export class HistoricalPositionChartComponent implements OnChanges {

    @Input() chartDataset: ChartDataset;
    @Input() labels: string[];
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    public barChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: {
            x: {},
            y: {
                min: 10
            }
        },
        plugins: {
            legend: {
                display: true,
            }
        }
    };
    barChartType: ChartType = 'bar';

    barChartData: ChartData<'bar'>;
    //   = {
    //     labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    //     datasets: [
    //       { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
    //       { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    //     ]
    //   };


    ngOnChanges(changes: SimpleChanges): void {
        this.barChartData = {
            labels: changes.labels.currentValue,
            datasets: changes.chartDataset.currentValue
        };
    }

}

