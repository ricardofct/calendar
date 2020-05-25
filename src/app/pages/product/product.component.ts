import { Component, OnInit } from '@angular/core';
import { ProductService, ProductAvailabilityDTO } from 'src/app/core/http/product.service';
import { Observable } from 'rxjs';

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

  disabledDates

  ngOnInit() {
    this.productAvailability$ = this.productService.
      getAvailability(this.today, new Date(this.today.getFullYear(), this.today.getMonth() + 1));
  }

  log(event) {
    console.log(event);
  }

}
