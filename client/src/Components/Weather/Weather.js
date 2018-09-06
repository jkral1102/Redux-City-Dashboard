import React, { Component } from 'react'
import './Weather.css'

class Weather extends Component {

  render() {
    return (
      <div id="weather">

      <div id="weatherTitle">Current Weather for <span>{this.props.city}</span></div>
      <div onClick={() => this.props.searchNew}>Change City</div>
            <span>temp: {this.props.weather.main.temp} </span>
            <span>min temp: {this.props.weather.main.min_temp} </span>
            <span>max temp: {this.props.weather.main.max_temp} </span>
            <span>humidity: {this.props.weather.main.humidity} </span>
            <div class='custWI wi wi-rain'></div>
            <span>main: {this.props.weather.weather[0].main} </span>
            <span>description: {this.props.weather.weather[0].description} </span>
      </div>
    )
  }
}

export default Weather;