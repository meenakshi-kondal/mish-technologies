import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ABOUT_DATA } from '../../interface/data';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgFor, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @ViewChildren('teamBox') teamBoxes!: QueryList<ElementRef>;
  private hasObserved = false;

  aboutSection: ABOUT_DATA = {
    header: '',
    content: [],
    action: [],
    button: ''
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAboutData().subscribe(data => {
      this.aboutSection = data;
    });
  }

    ngAfterViewChecked(): void {
     if (!this.hasObserved && this.teamBoxes.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' // 👈 Start observing earlier (from bottom)
      });



      this.teamBoxes.forEach(box => observer.observe(box.nativeElement));
      this.hasObserved = true;
    }
  }


}
