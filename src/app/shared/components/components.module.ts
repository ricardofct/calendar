import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCalendarModule } from './input-calendar/input-calendar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputCalendarModule
  ],
  exports: [
    InputCalendarModule
  ]
})
export class ComponentsModule { }
