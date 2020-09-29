import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputUserNameComponent } from './Components/input-user-name/input-user-name.component';
import { AppRoutingModule } from './app-routing.module';
import { LetsimagineComponent } from './components/letsimagine/letsimagine.component';

@NgModule({
  declarations: [
    AppComponent,
    InputUserNameComponent,
    LetsimagineComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
