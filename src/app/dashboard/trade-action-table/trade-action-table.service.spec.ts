import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TradeActionTableService } from './trade-action-table.service';
import { TradeAction } from '../trade-action-model';
import { AuthenticationService } from 'src/app/shared';
// describe('DashboardDataService', () => {
//   let service: DashboardDataService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(DashboardDataService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

const tradeActions: Partial<TradeAction>[] = [{ price: 1, commodityName: 'Gold' }, { price: 2, commodityName: 'Oil' }];

describe('TradeActionTableService', () => {
    let service: TradeActionTableService;
    let httpController: HttpTestingController;

    const url = 'http://localhost:50000/api';

    beforeEach(() => {
        const mockAuthenticationService = jasmine.createSpyObj(['getAccessToken']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                TradeActionTableService,
                HttpClient,
                {provide: AuthenticationService, useValue: mockAuthenticationService}
            ]
        });
        service = TestBed.inject(TradeActionTableService);
        httpController = TestBed.inject(HttpTestingController);
    });


    it('should call loadAll and return list oftrade actions', () => {

        // 1

        service.tradeActions.subscribe((res) => {
            // 2
            expect(tradeActions[0].commodityName).toEqual(tradeActions[0].commodityName);
        });
        service.loadAll();
        // 3
        const req = httpController.expectOne({
            method: 'GET',
            url: `${url}/tradeactions?selectedModel=undefined&selectedCommodity=undefined`,
        });

        // 4
        req.flush(tradeActions);
    });
});

