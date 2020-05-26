import { Component, OnInit } from "@angular/core";
import { OpenWeatherService } from "../services/open-weather.service";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

class DayForecastInfo {
  sunrise: string;
  sunset: string;
  dayNumber: string;
  shortDayOfWeek: string;
  longDayOfWeek: string;
  month: string;
  dayTemp: number;
  nightTemp: number;
  feelsLikeDayTemp: number;
  feelsLikeNightTemp: number;
  windSpeed: number;
  clouds: number;
  humidity: number;
  pressure: number;
  weatherDesc: string;
  iconUrl: SafeResourceUrl;
}

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  forecasts: DayForecastInfo[] = [];
  data = [];
  displayedColumns = ["dayInfo", "icon", "dayTemp"];
  selectedForecast: DayForecastInfo;
  selectedRowIndex: number = 0;
  constructor(
    private openWeatherService: OpenWeatherService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.openWeatherService.getWeatherData().subscribe(data => {
      data.daily.forEach(dayInfo => {
        let forecast: DayForecastInfo = new DayForecastInfo();
        forecast.dayNumber = this.getDayNumber(dayInfo.dt);
        forecast.shortDayOfWeek = this.getShortDayOfWeek(dayInfo.dt);
        forecast.longDayOfWeek = this.getLongDayOfWeek(dayInfo.dt);
        forecast.month = this.getMonth(dayInfo.dt);
        forecast.dayTemp = Math.floor(dayInfo.temp.day);
        forecast.nightTemp = Math.floor(dayInfo.temp.night);
        forecast.feelsLikeDayTemp = Math.floor(dayInfo.feels_like.day);
        forecast.feelsLikeNightTemp = Math.floor(dayInfo.feels_like.night);
        forecast.clouds = dayInfo.clouds;
        forecast.pressure = this.hpaToMmHg(dayInfo.pressure);
        forecast.windSpeed = dayInfo.wind_speed;
        forecast.sunrise = this.getShortTimeStyle(dayInfo.sunrise);
        forecast.sunset = this.getShortTimeStyle(dayInfo.sunset);
        forecast.humidity = dayInfo.humidity;
        forecast.weatherDesc = dayInfo.weather[0].description;
        forecast.iconUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://openweathermap.org/img/wn/${dayInfo.weather[0].icon}@2x.png`
        );
        this.forecasts.push(forecast);
      });
      this.selectedForecast = this.forecasts[0];
      this.data = this.forecasts;
    });
  }

  getMonth(dt: number): string {
    return new Date(dt * 1000).toLocaleString("en-us", { month: "short" });
  }

  getDayNumber(dt: number): string {
    return new Date(dt * 1000).toLocaleString("en-us", { day: "numeric" });
  }

  getShortDayOfWeek(dt: number): string {
    return new Date(dt * 1000).toLocaleString("en-us", { weekday: "short" });
  }

  getLongDayOfWeek(dt: number): string {
    return new Date(dt * 1000).toLocaleString("en-us", { weekday: "long" });
  }

  getShortTimeStyle(dt: number): string {
    return new Date(dt * 1000).toLocaleString("ru-ru", { timeStyle: "short" });
  }

  selectForecast(index: any) {
    this.selectedForecast = this.forecasts[index];
    this.selectedRowIndex = index;
  }

  hpaToMmHg(pressure: number): number {
    return parseFloat((pressure / 1.333).toFixed(2));
  }
}
