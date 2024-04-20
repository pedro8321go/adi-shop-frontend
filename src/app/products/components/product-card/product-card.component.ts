import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Product} from "../../../interfaces/product.interface";
import { Input} from "@angular/core";

@Component({
  selector: 'app-product-card',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  @Input() product: Product | undefined;
  @Input() index: number | undefined;

}
