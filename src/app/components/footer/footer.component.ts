import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FOOTER_DATA } from '../../interface/data';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [NgFor, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerData: FOOTER_DATA = {
    title: '',
    slogan:'',
    quick_links: [],
    social_media:[],
    copyright:'',
    tagline:''
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFooterData().subscribe(data => {
      this.footerData = data;
    });
  }
}
