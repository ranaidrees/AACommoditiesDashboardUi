import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions, ChartType, Color, TooltipLabelStyle, } from 'chart.js';

@Component({
    selector: 'app-historical-line-chart',
    templateUrl: './historical-line-chart.component.html',
    styleUrls: ['./historical-line-chart.component.scss']
})
export class HistoricalLineChartComponent implements OnChanges {
    @Input() chartDataset: ChartDataset;
    @Input() labels: string[];
    salesData: ChartData<'line'>;
    chartOptions: ChartOptions;
    constructor() { }
    ngOnChanges(changes: SimpleChanges): void {
        this.salesData = {
            labels: changes.labels.currentValue,
            datasets: changes.chartDataset.currentValue
        };

        this.chartOptions = {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Sales Data',
                },
            },
        };
    }
}
