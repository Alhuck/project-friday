import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FridaySharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { LoginModalComponent } from '../shared/login/login.component';

@NgModule({
  imports: [FridaySharedModule, RouterModule.forChild(HOME_ROUTE)],

  declarations: [HomeComponent, LoginModalComponent]
})
export class FridayHomeModule {}
