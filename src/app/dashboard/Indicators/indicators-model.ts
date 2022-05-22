import { Charts } from "./charts/charts-model";
import { Metric } from "./mini-card/metric-model";

export interface Indicators {
    charts: Charts;
    metrics: Metric[];
}
