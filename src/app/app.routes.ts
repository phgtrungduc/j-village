import { Routes } from '@angular/router';
// import { authGuard } from './guard/auth-guard.guard';
import { HomePage } from './component/Pages/homepage/home-page.component';
import { OrderComponent } from './component/Pages/order/order.component';
import { BrandComponent } from './component/Pages/brand/brand.component';
import { MemberComponent } from './component/Pages/member/member.component';

export const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   canActivate: [authGuard]
  // },
  // {
  //   path: 'retailer',
  //   component: RetailerListComponent,
  //   canActivate: [authGuard]
  // },
  {
    path: '', // Default route
    redirectTo: 'home', // Redirect to homepage
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'brand',
    component: BrandComponent,
  },
  {
    path: 'member',
    component: MemberComponent,
  },
  {
    path: '**',
    component: HomePage, // Fallback to HomePage for any other unmatched routes
  },
];
