import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-metric',
    templateUrl: './metric.component.html',
    styleUrls: ['./metric.component.scss']
})
export class MetricCardComponent {
    @Input() icon: string;
    @Input() title: string;
    @Input() value: number;
    @Input() textValue: number;
    @Input() color: string;
    @Input() isIncrease: boolean;
    @Input() isCurrency: boolean;
    @Input() duration: string;
    @Input() percentValue: number;

    constructor() { }
}