import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TEAM_DATA } from '../../interface/data';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [NgFor, CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  @ViewChildren('teamBox') teamBoxes!: QueryList<ElementRef>;
  private hasObserved = false;


  teamData: TEAM_DATA = {
    title: '',
    members: [],
    watermark: '',
    tagline: ''
  }
  constructor(private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getTeamData().subscribe(data => {
      this.teamData = data;
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
