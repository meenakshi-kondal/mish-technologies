import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FOOTER_DATA } from '../../interface/data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  footerData: FOOTER_DATA = {
    title: '',
    slogan:'',
    quick_links: [],
    social_media:[],
    copyright:'',
    tagline:''
  }
  private dataService = inject(DataService);

  
  ngOnInit() {
    this.dataService.getFooterData().subscribe(data => {
      this.footerData = data;
    });
  }
}
