import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPopupComponent } from './area-popup.component';

describe('AreaPopupComponent', () => {
  let component: AreaPopupComponent;
  let fixture: ComponentFixture<AreaPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
