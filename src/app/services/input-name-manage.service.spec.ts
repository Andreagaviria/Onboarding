import { TestBed } from '@angular/core/testing';

import { InputNameManageService } from './input-name-manage.service';

describe('InputNameManageService', () => {
  let service: InputNameManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputNameManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
