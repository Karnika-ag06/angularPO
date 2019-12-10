import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisePOComponent } from './raise-po.component';

describe('RaisePOComponent', () => {
  let component: RaisePOComponent;
  let fixture: ComponentFixture<RaisePOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaisePOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisePOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
