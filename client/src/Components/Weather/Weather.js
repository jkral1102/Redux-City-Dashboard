import React, { Component } from 'react'
import './Weather.css'
import location from './location.png'
import convertTemp from '../../utils/temp'

import Arrows from './arrows.png'

class Weather extends Component {



  render() {

    // /* For use with weather icons library */
    // const icons = {
    //   'sunny': 'wi-day-sunny',
    //   'rainy': 'wi-day-rainy',


    // }
    // let weatherIcon= 'custWI wi ' + icons['sunny'];

    let weatherIcon = 'http://openweathermap.org/img/w/' + this.props.weather.weather[0].icon + '.png'
    //console.log(weatherIcon)
    // let country = function country() {
    //   if (this.props.weather.sys.country === 'US') { 
    //     return 'United States' 
    //   } 
    //   else { 
    //     return this.props.weather.sys.country 
    // }}
    var userCountry = this.props.weather.sys.country === 'US' ? 'United States' : this.props.weather.sys.country;

    return (
      <div id="weather">
      <div id='titleDiv'>
        <div id='cityName'>{this.props.city}</div>
        <div id='newSearchBtn' onClick={() => this.props.searchNew}>
          <img id='locationIcon' alt='location' src={location} /> 
          Change Location
        </div>
      </div>
        <span id='countryName'>{userCountry}</span>
        <div className={weatherIcon}></div>

        <div id='iconDiv'>
          <img alt='weather' src={weatherIcon}/>
          {this.props.weather.weather[0].main}
        </div>

        <div id='highLowTemp'>
        
            <span>{convertTemp('f', this.props.weather.main.temp_min)}°</span>
            <span><img id='arrow' src={ Arrows } alt='arrow'/></span>
            <span> {convertTemp('f', this.props.weather.main.temp_max)}° </span>
       
        </div>
        
        <span>Humidity {this.props.weather.main.humidity}% </span>

        <span id='currentTemp'>
              {convertTemp('f', this.props.weather.main.temp)}°
        </span>


        
      </div>
    )
  }
}

export default Weather;

