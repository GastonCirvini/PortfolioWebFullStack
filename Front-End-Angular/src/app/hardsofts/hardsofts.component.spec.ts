import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardsoftsComponent } from './hardsofts.component';

describe('HardsoftsComponent', () => {
  let component: HardsoftsComponent;
  let fixture: ComponentFixture<HardsoftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardsoftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardsoftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
