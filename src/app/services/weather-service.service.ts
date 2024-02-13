import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environements/environments';
import {WeatherData} from'../models/weather.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http:HttpClient) { }
   getWeatherData(cityName:string):Observable<WeatherData>{
   return this.http.get<WeatherData>(environment.baseUrl,{
      headers:new HttpHeaders()
      .set(environment.XRapidAPIHostName,environment.XRapidAPIHostValue)
      .set(environment.XRapidApiKey,environment.XRapidAPIKeyValue),
      params:new HttpParams()
      .set('city',cityName)
    })
  }
}
