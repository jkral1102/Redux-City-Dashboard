import React, { Component } from 'react'
// To get posts from the store:
// connects components to the redux store that was provided by the Provider
import { connect } from 'react-redux';
import { fetchArticles, fetchWeather, fetchEvents, searchNew } from '../../Actions/actions';
import PropTypes from 'prop-types'
import Weather from '../Weather'
import Navbar from '../Navbar'
import './Main.css'
import Articles from '../Articles'
import Footer from '../Footer'
import Events from '../Events'
// eventful api key - h3LjwpmzbpDcs6wx.

class Main extends Component {

  fetchCityData(e) {
    e.preventDefault();
    this.props.fetchArticles();
    this.props.fetchWeather();
    this.props.fetchEvents();
  }
  // If change location button selected, clear city from state OR redisplay search div
  searchNew() {
    this.props.searchNew();
  }

  render() {

    return (
      <div>
        <Navbar />
        <div id='main'>

          {/* WEATHER */}
          {this.props.city ?
            null
            :
            /* Render search DIV if no city is selected */
            <div id='searchDiv'>
              <form onSubmit={e => this.fetchCityData(e)}>
                <label>Let's Get Started</label>
                <input id='searchInput' type='text' placeholder='Enter City' />
                <br/>
                <button id='submitBtn' type='submit'>Submit</button>
              </form>
            </div>}


          {this.props.weather && <Weather searchNew={() => this.searchNew} weather={this.props.weather} city={this.props.city} />}
          {this.props.articles && <Articles articles={this.props.articles} />}
          {this.props.events && <Events events={this.props.events}/>}

        </div>
        <Footer />
      </div>
    )
  }
}

// Posts - component name, fetchPosts - imported postAction, posts - mapStatetoProps
Main.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  fetchWeather: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  searchNew: PropTypes.func.isRequired
}
// bring in newly added items in the state to the component
const mapStateToProps = state => ({
  // property posts - determined in index.js (root reducer) - posts: postReducer
  // posts.item - determined by postReducer: items: action.payload
  articles: state.cityData.articles,
  weather: state.cityData.weather,
  city: state.cityData.city,
  events: state.cityData.events
})
export default connect(mapStateToProps, { fetchArticles, fetchWeather, fetchEvents, searchNew })(Main);

