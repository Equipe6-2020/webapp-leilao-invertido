import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { WishlistComponent } from './dashboard/wishlist/wishlist.component';
import { WishlistCreateComponent } from './dashboard/wishlist/wishlist-create/wishlist-create.component';
import { DetailComponent } from './dashboard/wishlist/detail/detail.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      {
        path: 'login', 
        component: LoginComponent
      },
      {
        path: 'register', 
        component: RegisterComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'wishlist', children: [
          {
            path: '', component: WishlistComponent
          },
          {
            path: 'create', component: WishlistCreateComponent   
          },
          {
            path: ':id', component: DetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
