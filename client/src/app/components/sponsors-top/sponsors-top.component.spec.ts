import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsTopComponent } from './sponsors-top.component';

describe('SponsorsTopComponent', () => {
  let component: SponsorsTopComponent;
  let fixture: ComponentFixture<SponsorsTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorsTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
