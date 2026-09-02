import { TestBed } from '@angular/core/testing';

import { OperationReceiptService } from './operation-receipt.service';

describe('OperationReceiptService', () => {
  let service: OperationReceiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationReceiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
