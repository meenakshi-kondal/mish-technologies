import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TECHNOLOGY_DATA } from '../../interface/data';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-technologies',
  imports: [NgFor],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
  @ViewChild('techContainer') techContainer!: ElementRef;
  technologies: TECHNOLOGY_DATA = {
    header: '',
    images: []

  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTechnologyData().subscribe(data => {
      this.technologies = data;
    });
  }


}
