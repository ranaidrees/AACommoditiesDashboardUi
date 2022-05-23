import { Charts } from "./charts/charts-model";
import { Metric } from "./metrics/metric-model";

export interface Indicators {
    charts: Charts;
    metrics: Metric[];
}
