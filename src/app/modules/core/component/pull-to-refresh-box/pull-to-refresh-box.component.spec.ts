import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullToRefreshBoxComponent } from './pull-to-refresh-box.component';

describe('PullToRefreshBoxComponent', () => {
  let component: PullToRefreshBoxComponent;
  let fixture: ComponentFixture<PullToRefreshBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullToRefreshBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullToRefreshBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
