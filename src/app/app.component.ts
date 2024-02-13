import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private weatherService:WeatherServiceService){

  }
  cityName:string='Charlotte';
  weatherData?:WeatherData;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
       this.cityName='';

  }
  onSubmit(){
   this.getWeatherData(this.cityName);
   this.cityName='';
  }
  private getWeatherData(cityName:string){
   this.weatherService.getWeatherData(cityName)
  .subscribe({
    next:(response)=>{
      this.weatherData=response;
      console.log(response);
    }
  })  
  }
  
}
