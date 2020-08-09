import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { FridaySharedModule } from 'app/shared/shared.module';
import { FridayCoreModule } from 'app/core/core.module';
import { FridayAppRoutingModule } from './app-routing.module';
import { FridayHomeModule } from './home/home.module';
import { FridayEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    FridaySharedModule,
    FridayCoreModule,
    FridayHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    FridayEntityModule,
    FridayAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class FridayAppModule {}
