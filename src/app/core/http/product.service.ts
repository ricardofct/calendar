import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl = environment.API + '/items/22/availability';

  getAvailability(month: number, year: number): Observable<ProductAvailabilityDTO> {
    const today = new Date()
    const endAt = new Date(year, month, 0);
    const endpoint = `${this.apiUrl}?start_at=${year}/${month < 10 ? `0${month}` : month}/${today.getFullYear() === year && today.getMonth() + 1 === month ? (today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()) : '01'}&end_at=${year}/${month < 10 ? `0${month}` : month}/${endAt.getDate()}&interval=true`;

    return this.http.get<{ data: ProductAvailabilityDTO }>(endpoint).pipe(
      map(res => res.data)
    )
  }

}

export interface ProductAvailabilityDTO {
  attributes: {
    start_at: Date,
    end_at: Date,
    available_periods: [Date, Date][],
    unavailable_periods: [Date, Date][],
    confirmed_inquiries: [Date, Date, number][],
    requested_inquiries: [Date, Date, number][]
  }
}
