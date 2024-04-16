import { TestBed } from '@angular/core/testing';

import { LoadMenuItemsServiceService } from './load-menu-items.service.service';

describe('LoadMenuItemsServiceService', () => {
  let service: LoadMenuItemsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadMenuItemsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
