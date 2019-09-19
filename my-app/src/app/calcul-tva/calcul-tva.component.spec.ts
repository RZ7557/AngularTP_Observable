import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculTvaComponent } from './calcul-tva.component';

describe('CalculTvaComponent', () => {
  let component: CalculTvaComponent;
  let fixture: ComponentFixture<CalculTvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculTvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculTvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
