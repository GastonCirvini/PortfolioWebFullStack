import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremieducacionComponent } from './sobremieducacion.component';

describe('SobremieducacionComponent', () => {
  let component: SobremieducacionComponent;
  let fixture: ComponentFixture<SobremieducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremieducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobremieducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
