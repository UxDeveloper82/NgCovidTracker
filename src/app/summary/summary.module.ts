import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { SharedModule } from '../shared/shared.module';
import { SummaryCardsComponent } from './components/summary-cards/summary-cards.component';


@NgModule({
  declarations: [
    SummaryPageComponent,
    SummaryCardsComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    SharedModule
  ]
})
export class SummaryModule { }
