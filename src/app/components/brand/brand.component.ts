import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BRAND_DATA } from '../../interface/data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-brand',
  imports: [NgFor],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss'
})
export class BrandComponent {
  constructor(private dataService: DataService) { }

  brandData: BRAND_DATA = {
    heading: '',
    list: []
  };

  ngOnInit() {
    this.dataService.getBrandData().subscribe(data => {
      this.brandData = data;
    });
  }
}
