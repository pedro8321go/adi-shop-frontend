import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => import('./products/products.component'),
    children: [
      {
        path: 'all',
        title: 'Products List',
        loadComponent: () => import('./products/pages/products-list/products-list.component')
      },
      {
        path: 'detail/:id',
        title: 'Product Detail',
        loadComponent: () => import('./products/pages/product-details/product-details.component')
      },
      {
        path: '',
        redirectTo: '/products/all',
        pathMatch: "full"
      }
    ]
  },
  {
    path: 'error',
    loadComponent: () => import('./errors/errors.component'),
    children: [
      {
        path: '404',
        title: 'Not found',
        loadComponent: () => import('./errors/pages/not-found/not-found.component')
      }
    ]
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: "full"
  },
  {
    path: '**',
    redirectTo: '/error/404'
  }
];
