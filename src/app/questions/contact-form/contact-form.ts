import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
  contactForm:FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],   
      message: ['',Validators.required]
    })
  }

  onSubmit(){
    if(this.contactForm.valid){
      console.log('Form Submitted!', this.contactForm.value);
      // Here you can handle the form submission, e.g., send it to a server
      setTimeout(() => {
        alert("Form Submitted Successfully!");
      }, 2000); // Reset the form after 2 seconds
    }
  }

}
