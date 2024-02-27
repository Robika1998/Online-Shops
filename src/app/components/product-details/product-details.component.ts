import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../../models/products';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  product: IProducts;
  productSupscribtion: Subscription;

  constructor( private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productSupscribtion  = this.route.data.subscribe((data) => {
      this.product = data['data']
    });
  }

}
