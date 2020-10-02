import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';


import { InputUserNameComponent } from './Components/input-user-name/input-user-name.component';
import { AppRoutingModule } from '../app-routing.module';
import { LetsimagineComponent } from './Components/letsimagine/letsimagine.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { CareerpathComponent } from './Components/careerpath/careerpath.component';



@NgModule({
  declarations: [
    InputUserNameComponent,
    LetsimagineComponent,
    WelcomeComponent,
    CareerpathComponent],
  imports: [
    CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, MatExpansionModule
  ],
  exports: [InputUserNameComponent,
    LetsimagineComponent,
    WelcomeComponent]
})
export class OnboardingModuleModule { }
