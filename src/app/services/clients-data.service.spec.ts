import { TestBed, inject } from '@angular/core/testing';

import { ClientsDataService } from './clients-data.service';

describe('ClientsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsDataService]
    });
  });

  it('should be created', inject([ClientsDataService], (service: ClientsDataService) => {
    expect(service).toBeTruthy();
  }));
});
