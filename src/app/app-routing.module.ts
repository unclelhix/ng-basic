import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataTypesComponent } from './data-types/data-types.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ServicePipesComponent } from './service-pipes/service-pipes.component';

const routes: Routes = [
  { path: '', component: DataTypesComponent },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'propertybinding', component:  PropertyBindingComponent},
  { path: 'builtindirectives', component:  BuiltInDirectivesComponent},
  { path: 'servicepipes', component:  ServicePipesComponent},
  { path: 'ngmodel', component:  NgModelComponent},
  { path: 'notfound', component:  NotFoundComponent},
  {
    path: '**',
    redirectTo: 'notfound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
