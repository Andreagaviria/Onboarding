import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { OnboardingModuleModule } from './onboarding-module/onboarding-module.module'
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, 
    AppRoutingModule, OnboardingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
