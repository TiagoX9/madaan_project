import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSliderComponent } from './components/home/home-slider/home-slider.component';
import { FooterComponent } from './components/home/footer/footer.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    HomeSliderComponent,
    FooterComponent,        
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
