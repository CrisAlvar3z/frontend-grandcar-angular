import { TestBed } from '@angular/core/testing';

import { VehiculosService } from '../_services/vehiculos.service';

describe('VehiculosService', () => {
  let service: VehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
