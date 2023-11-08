import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LayoutModule } from './componentes/layout/layout.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './componentes/shared/shared.module';
import { RoutesModule } from './componentes/routes/routes.module';
import { LoginComponent } from './componentes/Login/login.component';
import { RegisterComponent } from './componentes/Register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RoutesModule,
    SharedModule,
    HttpClientModule,
    FormsModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }