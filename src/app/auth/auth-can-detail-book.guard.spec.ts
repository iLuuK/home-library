import { TestBed, async, inject } from '@angular/core/testing';

import { AuthCanDetailBookGuard } from './auth-can-detail-book.guard';

describe('AuthCanDetailBookGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCanDetailBookGuard]
    });
  });

  it('should ...', inject([AuthCanDetailBookGuard], (guard: AuthCanDetailBookGuard) => {
    expect(guard).toBeTruthy();
  }));
});
