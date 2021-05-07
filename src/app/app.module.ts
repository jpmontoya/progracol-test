import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShapeComponent } from './components/shape/shape.component';
import { NewShapeComponent } from './components/new-shape/new-shape.component';
import { ModalSuccessComponent } from './components/new-shape/modal-success/modal-success.component';
import { ModalErrorComponent } from './components/new-shape/modal-error/modal-error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent,
    ShapeComponent,
    NewShapeComponent,
    ModalSuccessComponent,
    ModalErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
