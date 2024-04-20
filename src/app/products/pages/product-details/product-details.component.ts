import {Component, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../../interfaces/product.interface";
import {toSignal} from "@angular/core/rxjs-interop";
import {ProductsService} from "../../../services/products.service";
import {switchMap} from "rxjs";
import {JsonPipe, NgIf} from "@angular/common";

@Component({
  standalone: true,
  imports: [
    NgIf,
    JsonPipe
  ],
  templateUrl: './product-details.component.html',
  styles: ``
})
export default class ProductDetailsComponent implements OnInit{

  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);

  product!: Product;

  ngOnInit() {
    this.route.params.pipe(
      switchMap( ( {id}) => this.productsService.getProductById(id))
    ).subscribe( resp => {
      this.product = resp;
    })
  }

  // public product = signal<Product | undefined>(undefined);


  // public product = toSignal(
  //   this.route.params.pipe(
  //     switchMap( ( {id}) => this.productsService.getProductById(id))
  //   )
  // )


}
