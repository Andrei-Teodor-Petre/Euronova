import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuronovaComponent } from './euronova.component';

describe('EuronovaComponent', () => {
  let component: EuronovaComponent;
  let fixture: ComponentFixture<EuronovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuronovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuronovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
