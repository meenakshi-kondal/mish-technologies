import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CONTACT_DATA } from '../../interface/data';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {


  contactSection: CONTACT_DATA = {
    title: '',
    content: '',
    backgroundTitle: '',
    contact: [],
    image: '',
    form: {
      name: '',
      email: '',
      message: '',
      action: '',
    }
  };
  stretchScale = 0.1; // start small

  private dataService = inject(DataService);
  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  ngOnInit() {
    this.dataService.getContactData().subscribe(data => {
      this.contactSection = data;
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      // You can integrate backend or email service here
      this.contactForm.reset();
    } else {
      console.log('valid r not')
    }
  }
}
