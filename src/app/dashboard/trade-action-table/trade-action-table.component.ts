import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Commodities } from '../commodities';
import { Models } from '../models';
import { TradeAction } from '../trade-action-model';
import { TradeActionTableService } from './trade-action-table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
    selector: 'app-trade-action-table',
    templateUrl: './trade-action-table.component.html',
    styleUrls: ['./trade-action-table.component.scss']
})
export class TradeActionTableComponent implements OnInit, AfterViewInit {
    dataSource = new MatTableDataSource<TradeAction>();
    dataSourceWithPageSize: MatTableDataSource<TradeAction>;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator;

    tradeActiona$: Observable<TradeAction[]>;
    tradeActionList: TradeAction[];
    selectedCommodity: string = '';
    selectedModel: string = '';
    commodities = Commodities;
    models = Models;
    commodityEnumKeys = [];
    modelEnumKeys = [];
    displayedColumns = ['commodityModelName', 'commodityName', 'price', 'newTradeAction'];
    constructor(private tradeActionTableService: TradeActionTableService) {
        // To Do: Fetch the data from API to be in synch with data changes in Model and Commodity table
        this.commodityEnumKeys = Object.keys(this.commodities).filter(f => !isNaN(Number(f)));
        this.modelEnumKeys = Object.keys(this.models).filter(f => !isNaN(Number(f)));
        this.selectedModel = '';
        this.selectedCommodity = '';
    }
    ngOnInit(): void {
        this.tradeActiona$ = this.tradeActionTableService.tradeActions;
        this.tradeActionTableService.loadAll(this.selectedModel, this.selectedCommodity);
    }

    onChangeModel(value: string): void {
        this.selectedModel = value;
        this.tradeActionTableService.loadAll(this.selectedModel, this.selectedCommodity);
    }

    onChangeCommodity(value: string): void {
        this.selectedCommodity = value;
        this.tradeActionTableService.loadAll(this.selectedModel, this.selectedCommodity);
    }
    ngAfterViewInit(): void {
        this.tradeActiona$.subscribe(tradeActions => {
            this.tradeActionList = tradeActions;
            this.dataSource.data = this.tradeActionList;
            this.dataSource.paginator = this.paginator;
        });
    }
}

const ELEMENT_DATA: TradeAction[] = [
    { price: 1, newTradeAction: 1, commodityName: 'test', commodityModelName: 'ok' },
    { price: 1, newTradeAction: 1, commodityName: 'test', commodityModelName: 'ok' },
    { price: 1, newTradeAction: 1, commodityName: 'test', commodityModelName: 'ok' },
    { price: 1, newTradeAction: 1, commodityName: 'test', commodityModelName: 'ok' },
    { price: 1, newTradeAction: 1, commodityName: 'test', commodityModelName: 'ok' },
    { price: 1, newTradeAction: 1, commodityName: 'test', commodityModelName: 'ok' }
];
