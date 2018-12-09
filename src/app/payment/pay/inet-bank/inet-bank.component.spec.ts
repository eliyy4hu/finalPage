import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InetBankComponent } from './inet-bank.component';

describe('InetBankComponent', () => {
  let component: InetBankComponent;
  let fixture: ComponentFixture<InetBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InetBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InetBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
