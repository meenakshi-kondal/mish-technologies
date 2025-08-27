import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TECHNOLOGY_DATA } from '../../interface/data';
import { CommonModule, NgClass, NgFor } from '@angular/common';



@Component({
  selector: 'app-technologies',
  imports: [NgFor, CommonModule, NgClass],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

  @ViewChildren('techBox') techBoxes!: QueryList<ElementRef>;

  technologies: TECHNOLOGY_DATA = {
    header: '',
    images: []
  };
  visibleImages: boolean[] = [];
  private hasObserved = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTechnologyData().subscribe(data => {
      this.technologies = data;
    });
  }

  ngAfterViewChecked(): void {

    if (!this.hasObserved && this.techBoxes.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, {
        threshold: 0.4,
        rootMargin: '0px 0px -100px 0px' // 👈 Start observing earlier (from bottom)
      });



      this.techBoxes.forEach(box => observer.observe(box.nativeElement));
      this.hasObserved = true;
    }
  }
}
