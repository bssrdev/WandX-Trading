import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokentradeComponent } from './tokentrade.component';

describe('TokentradeComponent', () => {
  let component: TokentradeComponent;
  let fixture: ComponentFixture<TokentradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokentradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokentradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
