import { Routes, RouterModule } from '@angular/router';
import { TableBasicExample } from './components/table/table-basic-example';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
	{ path: '', component: ProductComponent },
	{ path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'table', component: TableBasicExample },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
