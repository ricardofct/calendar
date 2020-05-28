import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCalendarComponent } from './input-calendar.component';

import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from '../loading/loading.module';


@NgModule({
  declarations: [InputCalendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    LoadingModule
  ],
  exports: [
    InputCalendarComponent
  ]
})
export class InputCalendarModule { }
