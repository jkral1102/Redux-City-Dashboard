import React, { Component } from 'react'
import './Weather.css'

class Weather extends Component {

  weatherIcon(weather){
  switch(weather) {
    case 'sunny':
      return 'wi-day-sunny'
      //break;
    default:
    return 'wi-day-rainy'
    
  }
}

// weather(type) {
//   var type = {
//     'sunny': function () {
//       return 'wi-day-sunny';
//     },
//     'default': function () {
//       return 'wi-day-rainy';
//     }
//   }
// };

  render() {
    const icons = {
      'sunny': 'wi-day-sunny',
      'rainy': 'wi-day-rainy',

    
    }
    /* For use with weather icons library */
    //let weatherIcon= 'custWI wi ' + icons['sunny'];
 
    let weatherIcon = 'http://openweathermap.org/img/w/' + this.props.weather.weather[0].icon + '.png'
    console.log(weatherIcon)

    return (
      <div id="weather">

      <div id="weatherTitle">Weather for <span>{this.props.city}</span></div>
      <div onClick={() => this.props.searchNew}>Change City</div>
            <span>Current {this.props.weather.main.temp} </span>
            <span>Low {this.props.weather.main.temp_min} </span>
            <span>High {this.props.weather.main.temp_max} </span>
            <span>humidity: {this.props.weather.main.humidity} </span>
            <div className={weatherIcon}></div>
            <span>Currently:
             <br/>{this.props.weather.weather[0].main} ({this.props.weather.weather[0].description})
            </span>
            <div><img alt='weather' src={weatherIcon}/></div>
      </div>
    )
  }
}

export default Weather;