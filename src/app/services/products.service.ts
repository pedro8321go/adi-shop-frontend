import {computed, inject, Injectable, signal} from '@angular/core';
import {Product, ProductsResponse} from "../interfaces/product.interface";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

interface State {
  products: Product[],
  loading: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);
  private dataUrl = 'assets/demo/data/DatosScraping.json'

  getProducts(offset: number, limit: number): Observable<ProductsResponse> {
    return this.http.get<Product[]>(this.dataUrl)
      .pipe(
        map(resp => {
          return {
            products: resp.slice(offset, offset+limit),
            total: resp.length
          }
        })
      )
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product[]>(this.dataUrl)
      .pipe(
        map( resp => {
          if (id <= resp.length-1) {
            return resp[id]
          } else {
            return resp[0]
          }
        })
      )
  }

  // getProductById(id: number) {
  //   return this.http.get<Product[]>('assets/demo/data/DatosScraping.json')
  //       .pipe(
  //         map ( resp => {
  //           if (id <= resp.length-1) {
  //             return resp[id]
  //           } else {
  //             return resp[0]
  //           }
  //         })
  //       )
  // }

  // #state = signal<State>({
  //   loading: true,
  //   products: []
  // });
  //
  // public limit: number = 8;
  // public counter: number = 0
  //
  // public products = computed(() => this.#state().products.slice(this.counter, this.counter+this.limit-1));
  // public loading = computed(() => this.#state().loading);
  // public totalProducts = computed(() => this.#state().products.length);
  //
  // constructor() {
  //   this.http.get<Product[]>('assets/demo/data/DatosScraping.json')
  //     .subscribe( res => {
  //       console.log(res)
  //       this.#state.set({
  //         loading: false,
  //         products: res
  //       })
  //     });
  // }
  //
  // getProductById(id: number) {
  //   return this.http.get<Product[]>('assets/demo/data/DatosScraping.json')
  //       .pipe(
  //         map ( resp => {
  //           if (id <= resp.length-1) {
  //             return resp[id]
  //           } else {
  //             return resp[0]
  //           }
  //         })
  //       )
  // }
}
