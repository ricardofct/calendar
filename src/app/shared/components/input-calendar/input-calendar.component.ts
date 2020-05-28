import { Component, OnInit, Input, forwardRef, Output, EventEmitter, ViewChildren, QueryList, ElementRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-calendar',
  templateUrl: './input-calendar.component.html',
  styleUrls: ['./input-calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCalendarComponent),
      multi: true
    }
  ]
})
export class InputCalendarComponent implements OnInit, ControlValueAccessor {
  @Output() customChange = new EventEmitter();
  @Output() monthChange = new EventEmitter();

  @Input() disabledDates: Date[]
  @Input() isLoading = false;

  pt: any;

  constructor() {
    console.log('InputCalendarComponent')
  }

  set dates(value) {
    this._dates = value;
    this.calendarChange(this._dates);
    this.customChange.emit(this._dates);
    this.setSplittedDate(this._dates);
  }

  get dates() {
    return this._dates;
  }

  today = new Date();

  _dates = [];

  splittedDates = {
    startAtDay: null,
    startAtMonth: null,
    startAtYear: null,
    endAtDay: null,
    endAtMonth: null,
    endAtYear: null,
  }

  emitMonthChange($event) {
    this.monthChange.emit($event)
  }

  setSplittedDate([startAt, endAt]: Date[]): void {
    if (startAt) {
      this.splittedDates = {
        ...this.splittedDates,
        startAtDay: startAt.getDate(),
        startAtMonth: startAt.getMonth(),
        startAtYear: startAt.getFullYear(),
      }
    } else {
      this.splittedDates = {
        ...this.splittedDates,
        startAtDay: null,
        startAtMonth: null,
        startAtYear: null,
      }
    }
    if (endAt) {
      this.splittedDates = {
        ...this.splittedDates,
        endAtDay: endAt.getDate(),
        endAtMonth: endAt.getMonth(),
        endAtYear: endAt.getFullYear(),
      }
    } else {
      this.splittedDates = {
        ...this.splittedDates,
        endAtDay: null,
        endAtMonth: null,
        endAtYear: null,
      }
    }
  }

  calendarChange = (_: any) => { };
  calendarTouched = (_: any) => { };

  ngOnInit(): void {
    this.pt = {
      dayNamesMin: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      weekHeader: 'Wk'
    };
  }

  writeValue(value: any): void {
    this.dates = value;
  }

  registerOnChange(fn: any): void {
    this.calendarChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.calendarTouched = fn;
  }

}
