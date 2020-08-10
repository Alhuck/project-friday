import { NgModule } from '@angular/core';
import { FridaySharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
// import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [FridaySharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
  // entryComponents: [LoginModalComponent],
  exports: [FridaySharedLibsModule, AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective]
})
export class FridaySharedModule {}
