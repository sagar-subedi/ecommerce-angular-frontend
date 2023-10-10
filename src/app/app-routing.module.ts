import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { roleGuard } from './role.guard';

const routes: Routes = [

  {
    path: "", component: HomeComponent
  },
  {
    path:"register", component: RegisterComponent
  },
  {
    path:"login", component: LoginComponent
  },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart',
   component: CartComponent,
   canActivate: [roleGuard], // Apply the RoleGuard function to the user route
   data: { allowedRoles: ['ROLE_USER', 'ROLE_ADMIN'] }, // Allow 'ROLE_USER' and 'ROLE_ADMIN'
  },
  {path:'orders', component: OrdersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
