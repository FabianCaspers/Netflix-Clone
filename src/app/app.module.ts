import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieSliderComponent } from './components/movie-slider/movie-slider.component';
import {HttpClientModule} from '@angular/common/http';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }