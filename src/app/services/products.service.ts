import {computed, inject, Injectable, signal} from '@angular/core';
import {Product} from "../interfaces/product.interface";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

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

  private limit: number = 8;
  private counter: number = 0

  public products = computed(() => this.#state().products.slice(440, 800));
  public loading = computed(() => this.#state().loading);
  public totalProducts = computed(() => this.#state().products.length);

  constructor() {
    this.http.get<Product[]>('assets/demo/data/DatosScraping.json')
      .subscribe( res => {
        console.log(res)
        this.#state.set({
          loading: false,
          products: res
        })
      });
  }

  getProductById(id: number) {
    return this.http.get<Product[]>('assets/demo/data/DatosScraping.json')
        .pipe(
          map ( resp => {
            if (id <= resp.length-1) {
              return resp[id]
            } else {
              return resp[0]
            }
          })
        )
  }
}
