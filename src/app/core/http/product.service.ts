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

  private apiUrl = environment.API + 'items/22/availability';

  getAvailability(startAt: Date, endAt: Date): Observable<any> {
    const endpoint = `${this.apiUrl}?start_at=2020/06/01&end_at=2020/06/30&interval=true`;

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
