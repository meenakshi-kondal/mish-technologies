import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ABOUT_DATA } from '../../interface/data';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgFor, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutSection: ABOUT_DATA = {
    header: '',
    content: [],
    action: [],
    button: ''
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAboutData().subscribe(data => {
      this.aboutSection = data;
    });
  }


}
