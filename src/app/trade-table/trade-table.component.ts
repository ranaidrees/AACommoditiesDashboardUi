import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TradeAction } from '../dashboard/trade-action-model';
import { TradeTableDataSource, TradeTableItem } from './trade-table-datasource';

@Component({
  selector: 'app-trade-table',
  templateUrl: './trade-table.component.html',
  styleUrls: ['./trade-table.component.scss']
})
export class TradeTableComponent implements OnChanges, AfterViewInit {

    @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TradeTableItem>;
    // const ELEMENT_DATA: TradeTableDataSource[] = [
    //     {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    //     {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    //     {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    //     {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    //     {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    //     {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    //     {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    //     {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    //     {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    //     {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    //   ];
    @Input() tradeActions: TradeAction[];
  dataSource: TradeTableDataSource;
  tradeList:TradeTableItem[] = [];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['commodityModelName', 'commodityName', 'date', 'price', 'position', 'pnlDaily'];

  constructor() {
    this.dataSource = new TradeTableDataSource(this.tradeList);

  }

  ngOnChanges(changes: SimpleChanges): void {
      this.tradeActions = changes.tradeActions.currentValue;
    this.tradeActions.map(x=> {
        this.tradeList.push({commodityModelName: x.commodityModelName,
        commodityName: x.commodityName, date: x.date, price: x.price, position: x.position, pnlDaily: x.pnlDaily});
      })
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = new TradeTableDataSource(this.tradeList).data;
  }
}
