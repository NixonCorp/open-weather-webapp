import { Component, Input } from "@angular/core";

@Component({
  selector: "selected-weather-forecast",
  templateUrl: "./selected-weather-forecast.component.html",
  styleUrls: ["./selected-weather-forecast.component.css"]
})
export class SelectedWeatherForecastComponent {
  @Input() dayOfWeek: string;
  @Input() month: string;
  @Input() iconUrl: string;
  @Input() dayNumber: string;
  @Input() weatherDesc: string;
  @Input() sunrise: string;
  @Input() sunset: string;
  @Input() feelsLikeDayTemp: number;
  @Input() feelsLikeNightTemp: number;
  @Input() clouds: string;
  @Input() windSpeed: string;
  @Input() humidity: string;
  @Input() pressure: string;
}
