import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateFormComponent } from './components/template-form/template-form.component';
import { PipesAndDirectivesComponent } from './components/pipes-and-directives/pipes-and-directives.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const appRoutes = [
	{ path:'templateForms', component: TemplateFormComponent },	
  { path:'pipesDirectives', component: PipesAndDirectivesComponent },
  { path:'reactiveForm', component: ReactiveFormComponent },  
	{ path:'', redirectTo:'/templateForms', pathMatch: 'full'},
	{ path:'**', redirectTo:'/templateForms', pathMatch: 'full'}
]
@NgModule({
  exports: [ RouterModule ],
  imports: [
  	RouterModule.forRoot(appRoutes)
  ],
  providers:[],
  declarations: []
})
export class AppRoutingModule { }
