import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TECHNOLOGY_DATA } from '../../interface/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent implements OnInit {

  technologies: TECHNOLOGY_DATA = {
    header: '',
    images: []
  };

  visibleImages: boolean[] = [];

  private dataService = inject(DataService);
  private el = inject(ElementRef);

  ngOnInit() {
    this.dataService.getTechnologyData().subscribe(data => {
      this.technologies = data;
      setTimeout(() => this.initObserver());
    });
  }

  initObserver() {
    const boxes = this.el.nativeElement.querySelectorAll('.box');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(
            (entry.target as HTMLElement).dataset['index']
          );

          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 50);

        }
      });
    }, { threshold: 0.2 });

    boxes.forEach((box: Element) => observer.observe(box));
  }

}