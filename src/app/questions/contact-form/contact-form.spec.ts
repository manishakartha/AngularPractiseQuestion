import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ContactForm } from './contact-form';
import { error } from 'console';

describe('ContactForm', () => {
  let component: ContactForm;
  let fixture: ComponentFixture<ContactForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should require name,email and message field", () => {
    const form = component .contactForm;
    form.setValue({
      name: '',
      email: '',
      message: ''
    });
    expect(form.valid).toBeFalse();
    expect(form.get('name')?.errors?.['required']).toBeTruthy();
    expect(form.get('email')?.errors?.['required']).toBeTruthy();
    expect(form.get('message')?.errors?.['required']).toBeTruthy();
  });
  it('should submit the form when valid', fakeAsync(() => {

    spyOn(window,'alert');
    component.contactForm.setValue({
      name:"Manisha",
      email:"maneesha.kartha@gmail.com",
      message:"Hi, How are you"
    })
    component.onSubmit();
    expect(component.contactForm.valid).toBeTrue()
    
  tick(2000); // Fast-forward 2 seconds
  expect(window.alert).toHaveBeenCalledWith('Form Submitted Successfully!');
  }));
it('should show alert after 2 seconds on submit', fakeAsync(() => {
  spyOn(window, 'alert');

  component.contactForm.setValue({
    name: 'Manisha',
    email: 'manisha@example.com',
    message: 'Hello!'
  });

  component.onSubmit();

  tick(2000); // Fast-forward 2 seconds
  expect(window.alert).toHaveBeenCalledWith('Form Submitted Successfully!');
}));  
});
