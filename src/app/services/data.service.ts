import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

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
}
