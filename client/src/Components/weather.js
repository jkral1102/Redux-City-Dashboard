import React, { Component } from 'react'

export default class weather extends Component {
  render() {
    return (
      <div>
            <span>temp: {this.props.weather.main.temp} </span>
            <span>min temp: {this.props.weather.main.min_temp} </span>
            <span>max temp: {this.props.weather.main.max_temp} </span>
            <span>humidity: {this.props.weather.main.humidity} </span>
            <span>main: {this.props.weather.weather[0].main} </span>
            <span>description: {this.props.weather.weather[0].description} </span>
      </div>
    )
  }
}
