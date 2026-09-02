import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationReceiptPdf } from './operation-receipt-pdf';

describe('OperationReceiptPdf', () => {
  let component: OperationReceiptPdf;
  let fixture: ComponentFixture<OperationReceiptPdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationReceiptPdf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationReceiptPdf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
