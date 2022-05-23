import { Indicators } from './Indicators/indicators-model';

export interface Dashboard {
    indicators: Indicators;
    pnlMetric: number;
    drawDownYtd: number;
}
