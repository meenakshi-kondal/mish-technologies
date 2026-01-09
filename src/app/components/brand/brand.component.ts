import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BRAND_DATA } from '../../interface/data';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss'
})
export class BrandComponent implements OnInit {

    private dataService = inject(DataService);
    private el = inject(ElementRef);

  brandData: BRAND_DATA = {
    heading: '',
    list: []
  };

  ngOnInit() {
    this.dataService.getBrandData().subscribe(data => {
      this.brandData = data;

      setTimeout(() => this.initObserve());
    });
  }

  initObserve() {
    const boxes = this.el.nativeElement.querySelectorAll('.content');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    }, { threshold: 0.3 });
  
    boxes.forEach((box: Element) => observer.observe(box));
  }


}
