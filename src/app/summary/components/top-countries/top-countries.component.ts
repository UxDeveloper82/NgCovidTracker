import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-countries',
  templateUrl: './top-countries.component.html',
  styleUrls: ['./top-countries.component.css']
})
export class TopCountriesComponent implements OnInit {

  @Input() covidData: any;
  topConfirmedCases: any[] = [];
  topConfirmedDeaths: any[] = [];
  topConfirmedRecovered: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.topConfirmedCases = this.covidData.countries
    ?.sort((a: any, b: any) => b.TotalConfirmed - a.TotalConfirmed)
    .slice(0, 5);

    this.topConfirmedDeaths = this.covidData.countries
    ?.sort((a: any, b: any) => b.TotalDeaths - a.TotalDeaths)
    .slice(0, 5);

    this.topConfirmedRecovered = this.covidData.countries
    ?.sort((a: any, b: any) => b.Totalrecovered - a.Totalrecovered)
    .slice(0, 5);
  }
}
