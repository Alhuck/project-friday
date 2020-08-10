import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginModalComponent } from 'app/shared/login/login.component';

export const HOME_ROUTE: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      authorities: [],
      pageTitle: 'Welcome'
    }
  },
  {
    path: '',
    component: LoginModalComponent,
    data: {
      authorities: [],
      pageTitle: 'Login'
    }
  }
];
