import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../../app-routing.module';





@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    
  ],
  imports: [
   CommonModule, 
   RouterModule,
   AppRoutingModule,
   
  ],
  exports: [
    HeaderComponent,
   
  
  ]
})
export class LayoutModule { }
