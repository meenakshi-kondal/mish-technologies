import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ABOUT_DATA } from '../../interface/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  aboutSection: ABOUT_DATA = {
    header: '',
    content: [],
    action: [],
    button: ''
  }

  private dataService = inject(DataService);
  private el = inject(ElementRef);

  ngOnInit() {
    this.dataService.getAboutData().subscribe(data => {
      this.aboutSection = data;

      setTimeout(() => this.initObserver());
    });
  }

  initObserver() {
    const boxes = this.el.nativeElement.querySelectorAll('.left-content-container');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.5 });

    boxes.forEach((box: Element) => observer.observe(box));
  }


}
