import { Component, OnInit } from '@angular/core';
import { ProductService, ProductAvailabilityDTO } from 'src/app/core/http/product.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  productAvailability$: Observable<ProductAvailabilityDTO>;

  value = [];
  today = new Date();
  invalidRange = false;

  disabledDates: Date[] = [];

  convertedDates = [];

  ngOnInit() {
    this.getAvailability({ month: this.today.getMonth() + 1, year: this.today.getFullYear() })
  }

  getAvailability({ month, year }: { month: number, year: number }) {
    this.productAvailability$ = this.productService.
      getAvailability(month, year).pipe(tap(
        availability => {
          availability.attributes.unavailable_periods.forEach(
            ([startAtDTO, endAtDTO]: [Date, Date]) => {
              const startAt = moment(startAtDTO);
              const endAt = moment(endAtDTO);

              while (startAt < endAt) {
                if (!this.disabledDates.some(date => {
                  return date.getTime() === startAt.unix() * 1000
                })) {
                  this.disabledDates.push(startAt.toDate())
                }
                startAt.add(1, 'd')
              }
              this.disabledDates = [...this.disabledDates]
            }
          )
        }
      ));
  }

  validateRange(event) {
    const [startAt, endAt] = event;
    this.convertedDates = [startAt ? moment(startAt).format('DD/MM/YYYY') : null, endAt ? moment(endAt).format('DD/MM/YYYY') : null]
    if (startAt && endAt) {
      this.invalidRange = this.disabledDates.some(date => {
        console.log(date > startAt && date < endAt, date, startAt, endAt)
        return date > startAt && date < endAt
      })
    }
  }

}
