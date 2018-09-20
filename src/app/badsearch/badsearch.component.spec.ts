import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadsearchComponent } from './badsearch.component';

describe('BadsearchComponent', () => {
  let component: BadsearchComponent;
  let fixture: ComponentFixture<BadsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
