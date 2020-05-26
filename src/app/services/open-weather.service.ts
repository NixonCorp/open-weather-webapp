import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class OpenWeatherService {
  private url = "https://api.openweathermap.org/data/2.5/onecall";
  private params = new HttpParams()
    .set("lat", "55.75")
    .set("lon", "37.62")
    .set("units", "metric")
    .set("appid", "460269cab9d0a9dc4250cf7c50175db3");

  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<Object> {
    return this.http.get(this.url, { params: this.params }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
