import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    IngresarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RoutesModule { }
