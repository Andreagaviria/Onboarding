import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { OnboardingModuleModule } from './onboarding-module/onboarding-module.module'
import { AppComponent } from './app.component';
import { MatExpansionModule } from '@angular/material/expansion';




@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, 
    AppRoutingModule, OnboardingModuleModule, MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
