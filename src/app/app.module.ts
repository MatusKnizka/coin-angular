import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './module/core/store/reducer/core.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FRAMEWORK_MODEL_TOKEN } from './module/core/model/framework/framework-model.token';
import { FRAMEWORK_SERVICE_TOKEN } from './module/core/service/framework/framework-service.token';
import { FrameworkService } from './module/core/service/framework/framework.service';
import { HttpClientModule } from '@angular/common/http';
import { FrameworkModel } from './module/core/model/framework/framework.model';
import { FrameworkEffects } from './module/core/store/effects/framework.effects';
import { MatBadgeModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatBadgeModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([FrameworkEffects])
  ],
  providers: [
    {provide: FRAMEWORK_MODEL_TOKEN, useClass: FrameworkModel},
    {provide: FRAMEWORK_SERVICE_TOKEN, useClass: FrameworkService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
