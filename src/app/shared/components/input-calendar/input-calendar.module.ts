import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCalendarComponent } from './input-calendar.component';

import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [InputCalendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule
  ],
  exports: [
    InputCalendarComponent
  ]
})
export class InputCalendarModule { }
