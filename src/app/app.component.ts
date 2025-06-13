import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from "./components/footer/footer.component";
import { TechnologiesComponent } from './components/technologies/technologies.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, HeaderComponent, AboutComponent, ServicesComponent, TeamComponent, ContactComponent, FooterComponent, TechnologiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mish_technology';
}
