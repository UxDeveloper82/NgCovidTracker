import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

   getSummaryData() {
    console.log('Getting Summary Data');
    return this.http.get(`${this.apiUrl}/summary`)
   }

   getCountyDataByDate(country: string, date: string) {
    return this.http.get(`${this.apiUrl}/total/country/${country}/status/confirmed?${date}`);
   }

}
