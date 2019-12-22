import { TestBed } from '@angular/core/testing';

import { Http.ServiceService } from './http.service.service';

describe('Http.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Http.ServiceService = TestBed.get(Http.ServiceService);
    expect(service).toBeTruthy();
  });
});
