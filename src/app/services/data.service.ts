/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);

  
  getHomeData(): Observable<any> {
    return this.http.get('/assets/data/home.json');
  }

  getAboutData(): Observable<any> {
    return this.http.get('/assets/data/about.json');
  }

  getServiceData(): Observable<any> {
    return this.http.get('/assets/data/services.json');
  }

  getTeamData(): Observable<any> {
    return this.http.get('/assets/data/team.json');
  }

  getContactData(): Observable<any> {
    return this.http.get('/assets/data/contact.json');
  }

  getFooterData(): Observable<any> {
    return this.http.get('/assets/data/footer.json');
  }

  getTechnologyData(): Observable<any> {
    return this.http.get('/assets/data/technologies.json');
  }

  getReviewData(): Observable<any> {
    return this.http.get('/assets/data/review.json');
  }

  getTaglineData(): Observable<any> {
    return this.http.get('/assets/data/taglineBlock.json');
  }
  
  getBrandData(): Observable<any> {
    return this.http.get('/assets/data/brand.json');
  }

  getGrowthData(): Observable<any> {
    return this.http.get('/assets/data/growth.json');
  }

}

