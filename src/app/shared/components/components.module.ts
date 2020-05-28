import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCalendarModule } from './input-calendar/input-calendar.module';
import { LoadingModule } from './loading/loading.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputCalendarModule,
    LoadingModule
  ],
  exports: [
    InputCalendarModule,
    LoadingModule
  ]
})
export class ComponentsModule { }
