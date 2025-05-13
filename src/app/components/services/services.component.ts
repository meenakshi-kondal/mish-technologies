import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SERVICE_DATA } from '../../interface/data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  servicesData: SERVICE_DATA = {
    title: '',
    tagline:'',
    services: [],
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getServiceData().subscribe(data => {
      this.servicesData = data;
    });
  }
}
