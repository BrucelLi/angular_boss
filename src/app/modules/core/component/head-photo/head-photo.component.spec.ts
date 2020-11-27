import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadPhotoComponent } from './head-photo.component';

describe('HeadPhotoComponent', () => {
  let component: HeadPhotoComponent;
  let fixture: ComponentFixture<HeadPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
