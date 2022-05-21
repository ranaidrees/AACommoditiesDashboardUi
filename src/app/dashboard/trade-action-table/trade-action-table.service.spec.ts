import { TestBed } from '@angular/core/testing';

import { TradeActionTableService } from './trade-action-table.service';

describe('TradeActionTableService', () => {
  let service: TradeActionTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeActionTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
