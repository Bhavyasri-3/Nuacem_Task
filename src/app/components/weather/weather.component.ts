import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

export interface ForecastEntry {
  dt_txt: string;
  main: {
    temp: number;
    pressure: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface ForecastData {
  city: {
    name: string;
  };
  list: ForecastEntry[];
}


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  cityName = '';
  recentCities:any[] = [];
  forecast: ForecastData | null = null;
  errorMsg = '';

  constructor(private weatherService: WeatherService){}

  addCity(){
    if(!this.cityName.trim()) return;
    this.weatherService.getCurrentWeather(this.cityName).subscribe(data =>{
      if(data){
        this.errorMsg = '';
        this.recentCities.unshift(data);
        if(this.recentCities.length > 8) this.recentCities.pop();
        this.cityName = '';

      }else{
        this.errorMsg = 'Invalid city name.';
      }
    })
  }

  refreshCity(index: number){
    const city = this.recentCities[index].name;
    this.weatherService.getCurrentWeather(city).subscribe(data =>{
      if(data) this.recentCities[index] = data;
    })
  }

  deleteCity(index: number){
    this.recentCities.splice(index, 1);
  }

  clearCities(){
    this.recentCities = [];
    this.forecast = null;
  }

  showForecast(city: string){
    this.weatherService.getForecast(city).subscribe(data =>{
      this.forecast = data;
    })
}
}