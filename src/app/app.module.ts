import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { PipesAndDirectivesComponent } from './components/pipes-and-directives/pipes-and-directives.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaskingPipePipe } from './masking-pipe.pipe';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';



@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    PipesAndDirectivesComponent,
    NavigationComponent,
    MaskingPipePipe,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
