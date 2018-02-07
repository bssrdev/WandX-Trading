import { TestBed, inject } from '@angular/core/testing';

import { CreatetokenService } from './createtoken.service';

describe('CreatetokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatetokenService]
    });
  });

  it('should be created', inject([CreatetokenService], (service: CreatetokenService) => {
    expect(service).toBeTruthy();
  }));
});
