import { TestBed } from '@angular/core/testing';

import { GoogleApiBookService } from './google-api-book.service';

describe('GoogleApiBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleApiBookService = TestBed.get(GoogleApiBookService);
    expect(service).toBeTruthy();
  });
});
