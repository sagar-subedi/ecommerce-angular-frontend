import { TestBed } from '@angular/core/testing';

import { PaymentKhaltiService } from './payment-khalti.service';

describe('PaymentKhaltiService', () => {
  let service: PaymentKhaltiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentKhaltiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
