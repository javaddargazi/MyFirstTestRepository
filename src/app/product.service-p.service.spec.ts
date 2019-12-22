import { TestBed } from '@angular/core/testing';

import { Product.ServicePService } from './Services/product.service';

describe('Product.ServicePService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Product.ServicePService = TestBed.get(Product.ServicePService);
    expect(service).toBeTruthy();
  });
});
