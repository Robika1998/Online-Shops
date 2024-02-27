import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  Router
} from '@angular/router';
import { EMPTY, catchError } from 'rxjs';
import { IProducts } from './../models/products';
import { ProductsService } from './products.service';

export const productResolver: ResolveFn<IProducts> = (
  route: ActivatedRouteSnapshot,
) => {

  const productsService = inject(ProductsService);
  const router = inject(Router);

  return productsService.getProduct(route.params?.['id']).pipe(
    catchError(() => {
      router.navigate(['products']);
      return EMPTY;
    })
  );
};



// import { inject } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   ResolveFn,
//   Router
// } from '@angular/router';
// import { EMPTY, catchError } from 'rxjs';
// import { IProducts } from './../models/products';
// import { ProductsServiceService } from './products.service';

// export const productResolver: ResolveFn<IProducts> = (
//   route: ActivatedRouteSnapshot,
// ) => {

//   const productsService = inject(ProductsServiceService);
//   const router = inject(Router);

//   return productsService.getProduct(route.params?.['id']).pipe(
//     catchError(() => {
//       router.navigate(['products']);
//       return EMPTY;
//     })
//   );
// };