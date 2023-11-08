import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';




@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    IngresarComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    
  ],
  exports: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    IngresarComponent,
    
    
  ]
})
export class RoutesModule { }
