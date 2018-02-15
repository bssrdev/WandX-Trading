import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingtokensComponent } from './existingtokens.component';

describe('ExistingtokensComponent', () => {
  let component: ExistingtokensComponent;
  let fixture: ComponentFixture<ExistingtokensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingtokensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingtokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
