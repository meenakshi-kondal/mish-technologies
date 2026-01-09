import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SERVICE_DATA } from '../../interface/data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  servicesData: SERVICE_DATA = {
    title: '',
    tagline:'',
    services: [],
  }
  private dataService = inject(DataService);

  ngOnInit() {
    this.dataService.getServiceData().subscribe(data => {
      this.servicesData = data;
    });
  }
}
