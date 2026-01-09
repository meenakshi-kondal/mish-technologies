import { Component, ElementRef, OnInit, AfterViewInit, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { GROWTH_DATA } from '../../interface/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-growth',
  imports: [CommonModule],
  templateUrl: './growth.component.html',
  styleUrl: './growth.component.scss'
})
export class GrowthComponent implements OnInit, AfterViewInit {

  growthContent: GROWTH_DATA = {
    heading: '',
    title: '',
    tagline: '',
    growth: []
  };

  private dataService = inject(DataService);
  private el = inject(ElementRef);

  ngOnInit() {
    this.dataService.getGrowthData().subscribe(data => {
      this.growthContent = data;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const cards = this.el.nativeElement.querySelectorAll('.number');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startCounting(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cards.forEach((card: any) => observer.observe(card));
    }, 500);
  }


  startCounting(element: HTMLElement) {
    const target = parseInt(element.dataset['count'] || '0', 10);
    const duration = 1000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      element.innerText = value.toString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

}
