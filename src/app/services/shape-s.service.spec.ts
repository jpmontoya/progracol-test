import { TestBed } from '@angular/core/testing';

import { ShapeSService } from './shape-s.service';

describe('ShapeSService', () => {
  let service: ShapeSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShapeSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
