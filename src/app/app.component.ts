import { Component, ElementRef, ViewChild } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from "./components/footer/footer.component";
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { LazyLoadObserverDirective } from './directives/lazy-load-observer.directive';

@Component({
  selector: 'app-root',
  imports: [LazyLoadObserverDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  constructor() { }

  header = HeaderComponent;
  home = HomeComponent;
  about = AboutComponent;
  services = ServicesComponent;
  team = TeamComponent;
  technologies = TechnologiesComponent;
  contact = ContactComponent;
  footer = FooterComponent;

  @ViewChild('customCursor') cursorRef!: ElementRef;
  @ViewChild('cursorDot') dotRef!: ElementRef;

  lastX = 0;
  lastY = 0;

  ngAfterViewInit() {
    document.addEventListener('mousemove', (e) => {
      const cursor = this.cursorRef.nativeElement;
      const dot = this.dotRef.nativeElement;

      const cursorX = e.clientX;
      const cursorY = e.clientY;

      // Move the entire cursor wrapper
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      // Calculate direction of movement
      const dx = cursorX - this.lastX;
      const dy = cursorY - this.lastY;

      // Limit dot movement within a range
      const maxOffset = 10; // px
      const moveX = Math.max(Math.min(dx * 0.4, maxOffset), -maxOffset);
      const moveY = Math.max(Math.min(dy * 0.4, maxOffset), -maxOffset);

      dot.style.transform = `translate(${moveX}px, ${moveY}px)`;

      this.lastX = cursorX;
      this.lastY = cursorY;

      const buttons = document.querySelectorAll('button');
      buttons.forEach((btn) => {
        btn.addEventListener('mouseenter', () => {
          cursor.classList.add('cursor-hover');
        });

        btn.addEventListener('mouseleave', () => {
          cursor.classList.remove('cursor-hover');
        });
      });
    });
  }


}
