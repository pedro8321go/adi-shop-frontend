import {Component, inject} from '@angular/core';
import {ProductsService} from "../../../services/products.service";
import {Product} from "../../../interfaces/product.interface";
import {JsonPipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ProductCardComponent} from "../../components/product-card/product-card.component";

@Component({
  standalone: true,
  imports: [
    JsonPipe,
    RouterLink,
    ProductCardComponent
  ],
  templateUrl: './products-list.component.html',
  styles: ``
})
export default class ProductsListComponent {

  public productsService = inject(ProductsService);
  products: Product[] = [];

}
