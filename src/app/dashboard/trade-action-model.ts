export interface TradeAction {
    id: number;
    date: string;
    contract: string;
    price: number;
    position: number;
    newTradeAction: number;
    pnlDaily: number;
    commodityId: number;
    commodityName: string;
    commodityModelName: string;
}