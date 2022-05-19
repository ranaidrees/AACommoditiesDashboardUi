import { TradeAction } from "./trade-action-model";

export interface Dashboard {
    tradeActions: TradeAction[];
    pnlMetric: number;
    drawDownYtd: number;
}