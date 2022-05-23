import { TestBed } from '@angular/core/testing';

import { DashboardDataService } from './dashboard-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Indicators } from './Indicators/indicators-model';
import { AuthenticationService } from '../shared';
import { HttpClient } from '@angular/common/http';
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

const indicators: Partial<Indicators> = { charts: { datasets: [][2], labels: ['one', 'two'] } };

describe('DashboardDataService', () => {
    let service: DashboardDataService;
    let httpController: HttpTestingController;

    const url = 'http://localhost:50000/api';

    beforeEach(() => {
        const mockAuthenticationService = jasmine.createSpyObj(['getAccessToken']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                DashboardDataService,
                HttpClient,
                {provide: AuthenticationService, useValue: mockAuthenticationService}
            ]
        });
        service = TestBed.inject(DashboardDataService);
        httpController = TestBed.inject(HttpTestingController);
    });


    it('should call loadAll and return indicators', () => {

        // 1

        service.indicatorsData.subscribe((res) => {
            // 2
            expect(res.charts.labels.length).toEqual(indicators.charts.labels.length);
        });
        service.loadAll();
        // 3
        const req = httpController.expectOne({
            method: 'GET',
            url: `${url}/indicators`,
        });

        // 4
        req.flush(indicators);
    });
});

