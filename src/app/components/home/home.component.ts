import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HOME_PROFILE } from '../../interface/data';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit, OnDestroy {

  homeProfile: HOME_PROFILE = {
    tagline: '',
    ideas: [],
    action: '',
    description: ''
  };
  currentIndex = 0;
  intervalId: any;
  square = Array(25);
  isVisible = false;

  constructor(private dataService: DataService, private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.dataService.getHomeData().subscribe(data => {
      this.homeProfile = data;
      if (this.homeProfile?.ideas?.length) {
        this.startTaglineLoop();
      }
    });

  }

  startTaglineLoop() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.homeProfile.ideas.length;
    }, 3000);
  }



  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
