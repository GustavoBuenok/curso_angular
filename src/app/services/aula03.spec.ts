import { TestBed } from '@angular/core/testing';

import { Aula03 } from './aula03';

describe('Aula03', () => {
  let service: Aula03;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aula03);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
