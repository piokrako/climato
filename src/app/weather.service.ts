import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  current:CurrentWeather = new CurrentWeather('Poznań', '24', '../assets/icons/sunny.svg', 'sunny', '26', '18')
  constructor() { }

  weatherCurrent() {
    return this.current;
  }
}
