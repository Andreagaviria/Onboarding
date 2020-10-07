import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpeopleComponent } from './cardpeople.component';

describe('CardpeopleComponent', () => {
  let component: CardpeopleComponent;
  let fixture: ComponentFixture<CardpeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardpeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
