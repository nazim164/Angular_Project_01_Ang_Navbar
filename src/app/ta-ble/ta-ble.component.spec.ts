import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaBLEComponent } from './ta-ble.component';

describe('TaBLEComponent', () => {
  let component: TaBLEComponent;
  let fixture: ComponentFixture<TaBLEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaBLEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaBLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
