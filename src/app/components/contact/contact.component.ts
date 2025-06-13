import { Component} from '@angular/core';
import { DataService } from '../../services/data.service';
import { CONTACT_DATA } from '../../interface/data';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  NgFor } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  contactSection: CONTACT_DATA = {
    title: '', content: '', contact: [], image: '', form: {
      name: '',
      email: '',
      message: '',
      action: '',
    }
  };
  contactForm: FormGroup;
  stretchScale = 0.1; // start small

  

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

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
