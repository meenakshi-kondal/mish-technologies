import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-tagline-block',
  imports: [],
  templateUrl: './tagline-block.component.html',
  styleUrl: './tagline-block.component.scss'
})
export class TaglineBlockComponent implements OnInit {

  private dataService = inject(DataService);

  tagline = {text:''};
  ngOnInit() {
    this.dataService.getTaglineData().subscribe(data => {
      this.tagline = data;
    });
  }
}
