import {computed, inject, Injectable, signal} from '@angular/core';
import {Product} from "../interfaces/product.interface";
import {HttpClient} from "@angular/common/http";

interface State {
  products: Product[],
  loading: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    products: []
  });

  public products = computed(() => this.#state().products);
  public loading = computed(() => this.#state().loading);

  constructor() {
    console.log('Loading Products Data ...');
    this.http.get<Product[]>('assets/demo/data/DatosScraping.json')
      .subscribe( res => {
        console.log(res)
        this.#state.set({
          loading: false,
          products: res
        })
        console.log(this.#state());
      });
  }
}
