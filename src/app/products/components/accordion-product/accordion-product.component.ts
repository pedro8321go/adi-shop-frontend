import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../interfaces/product.interface";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-accordion-product',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './accordion-product.component.html',
  styles: ``
})
export class AccordionProductComponent implements OnInit{

  @Input() product: Product | undefined;

  details: string[] = [];

  ngOnInit() {
    this.details = this.product!.Details.split('\n');
  }

}
