import { TestBed } from '@angular/core/testing';

import { ServerserviceService } from './serverservice.service';

describe('ServerserviceService', () => {
  let service: ServerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
