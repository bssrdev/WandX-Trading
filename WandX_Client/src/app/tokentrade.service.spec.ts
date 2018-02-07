import { TestBed, inject } from '@angular/core/testing';

import { TokentradeService } from './tokentrade.service';

describe('TokentradeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokentradeService]
    });
  });

  it('should be created', inject([TokentradeService], (service: TokentradeService) => {
    expect(service).toBeTruthy();
  }));
});
