import { Component } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions, ChartType, Color, TooltipLabelStyle, } from 'chart.js';

@Component({
  selector: 'app-historical-pnl-chart',
  templateUrl: './historical-pnl-chart.component.html',
  styleUrls: ['./historical-pnl-chart.component.scss']
})
export class HistoricalPnlChartComponent {
    salesData: ChartData<'line'> = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500], tension: 0.5 },
          { label: 'Laptop', data: [200, 100, 400, 50, 90], tension: 0.5 },
          { label: 'AC', data: [500, 400, 350, 450, 650], tension: 0.5 },
          { label: 'Headset', data: [1200, 1500, 1020, 1600, 900], tension: 0.5 },
        ],
      };

      chartOptions: ChartOptions = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Monthly Sales Data',
          },
        },
      };
  constructor() { }
}
