import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LetsimagineComponent } from './Components/letsimagine/letsimagine.component'
import { WelcomeComponent } from './Components/welcome/welcome.component';


const routes: Routes = [
  {path:'', component:WelcomeComponent},
  // {path:'letsimagine', component:LetsimagineComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [CommonModule, RouterModule]
})


export class AppRoutingModule { }

