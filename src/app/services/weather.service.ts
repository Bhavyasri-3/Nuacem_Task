import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { ForecastData } from '../components/weather/weather.component';
const API_KEY = 'd4594364698122bfd1c4b3eb5f2ff19f'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getCurrentWeather(city: string): Observable<any>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    return this.http.get(url).pipe(
      catchError(() => of(null))
    )
  }

  getForecast(city:string): Observable<ForecastData | null>{
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    return this.http.get<ForecastData>(url).pipe(
      catchError(() => of(null))
    );
  }
}
