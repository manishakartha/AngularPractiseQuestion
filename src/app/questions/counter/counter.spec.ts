import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from './counter';
import { By } from '@angular/platform-browser';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initial value of count to be 0',()=>{
    expect(component.count).toBe(0)
   
  });
  it('should increment count by 1',()=>{
    //can we mock increment method?
    component.Increment();
    expect(component.count).toBe(1)
  });
  it('should decrement value by 1',()=>{
    component.Decrement();
    expect (component.count).toBe(-1)
  });
  it('should click increment button',()=>{
    const button = fixture.debugElement.queryAll(By.css('button'))[0];
    button.triggerEventHandler('click',null);
    fixture.detectChanges();
    expect(component.count).toBe(1);
  });
  it('should click decrement button',()=>{
    const button = fixture.debugElement.queryAll(By.css('button'))[1];
    button.triggerEventHandler('click',null);
    fixture.detectChanges();
    expect(component.count).toBe(-1);
  })

});
