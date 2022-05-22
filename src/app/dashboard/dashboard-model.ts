import { Indicators } from "./Indicators/indicators-model";
import { TradeAction } from "./trade-action-model";

export interface Dashboard {
    indicators: Indicators;
    pnlMetric: number;
    drawDownYtd: number;
}