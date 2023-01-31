import { TestBed } from '@angular/core/testing';

import { ProductServicesService } from './product.service';

describe('ProductService', () => {
  let service: ProductServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
