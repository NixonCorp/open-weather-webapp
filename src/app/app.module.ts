import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from "@angular/material/table";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";
import { SelectedWeatherForecastComponent } from "./selected-weather-forecast/selected-weather-forecast.component";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatDividerModule,
    MatGridListModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SelectedWeatherForecastComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
