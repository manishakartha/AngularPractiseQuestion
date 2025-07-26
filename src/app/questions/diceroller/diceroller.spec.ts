import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DICEROLLER } from './diceroller';

describe('DICEROLLER', () => {
  let component: DICEROLLER;
  let fixture: ComponentFixture<DICEROLLER>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DICEROLLER]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DICEROLLER);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('sould generate random value',()=>{
     spyOn(Math, 'random').and.returnValue(0.5);

    // spyOn(Math,'floor');
    component.numberToRoll = 3;
    component.getRandomNumber()
     expect(component.values).toEqual([4, 4, 4]);
  })
});
