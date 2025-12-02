import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula4 } from './aula4';

describe('Aula4', () => {
  let component: Aula4;
  let fixture: ComponentFixture<Aula4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
