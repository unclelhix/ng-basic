import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataTypesComponent } from './data-types/data-types.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { ServicePipesComponent } from './service-pipes/service-pipes.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { CommonModule } from '@angular/common';
import { NgSwitchComponent } from './built-in-directives/ng-switch/ng-switch.component';
import { NgForComponent } from './built-in-directives/ng-for/ng-for.component';
import { NgIfComponent } from './built-in-directives/ng-if/ng-if.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormsValidationComponent } from './forms-validation/forms-validation.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { EmployeeStatusComponent } from './shared/employee-status.component';

@NgModule({
  declarations: [
    AppComponent,
      NotFoundComponent,
      MainNavbarComponent,
      DataBindingComponent,
      DataTypesComponent,
      BuiltInDirectivesComponent,
      ServicePipesComponent,
      PropertyBindingComponent,
      NgSwitchComponent,
      NgForComponent,
      NgIfComponent,
      NgModelComponent,
      FormsValidationComponent,
      ReactiveFormsComponent,
      EmployeeStatusComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Add this for ngModel etc
    CommonModule, //Add this for ngClass etc
    ReactiveFormsModule, //reactive forms
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [], //Add this to become accessible
  bootstrap: [AppComponent]
})
export class AppModule { }
