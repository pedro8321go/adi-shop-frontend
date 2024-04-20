import {Component, inject, OnInit} from '@angular/core';
import {ProductsService} from "../../../services/products.service";
import {Product, ProductsResponse} from "../../../interfaces/product.interface";
import {JsonPipe, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ProductCardComponent} from "../../components/product-card/product-card.component";
import {PaginationComponent} from "../../components/pagination/pagination.component";

@Component({
  standalone: true,
  imports: [
    JsonPipe,
    RouterLink,
    ProductCardComponent,
    PaginationComponent,
    NgIf
  ],
  templateUrl: './products-list.component.html',
  styles: ``
})
export default class ProductsListComponent  implements OnInit{

  public productsService = inject(ProductsService);
  data!: ProductsResponse;
  limit: number = 8;
  offset: number = 0

  ngOnInit() {
    this.getProducts(this.offset)
  }

  getProducts(offset: number) {
    this.productsService.getProducts(offset, this.limit).subscribe( resp => {
      this.data = resp;
    })
  }


  offsetChange(value: number){
    this.offset = value;
    this.getProducts(value);

  }

}
