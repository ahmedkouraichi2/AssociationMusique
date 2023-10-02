import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent 
implements OnInit {
  contactForm: FormGroup | undefined;
  isLoading: boolean = false;
  errorMessage: string | undefined;
  successMessage: string | undefined;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitForm(): void {
    // Add your form submission logic here
    this.isLoading = true;

    // Simulate a delay for demonstration purposes (replace with actual HTTP request)
    setTimeout(() => {
      this.isLoading = false;
      // Assuming success for demonstration
      this.successMessage = 'Your message has been sent. Thank you!';
    }, 2000);
  }
}