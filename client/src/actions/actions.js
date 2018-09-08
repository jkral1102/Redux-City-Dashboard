import {
    FETCH_ARTICLES,
    FETCH_WEATHER,
    FETCH_EVENTS,
    SEARCH_NEW
} from './types'

import axios from 'axios'


export const fetchArticles = (articles) => dispatch => {
    let searchTerm = document.getElementById("searchInput").value;
    fetch('https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=' + searchTerm + '&mkt=en-us', {
        headers: {
            'Ocp-Apim-Subscription-Key': '209ab4ee91e64dfb99527eb5ef13f2c9',
            'Host': 'api.cognitive.microsoft.com'
        },
    })
        .then(res => res.json())
        .then(articles => dispatch({
            type: FETCH_ARTICLES,
            payload: articles.value
        }))
        .then(data => console.log(data))
}

export const fetchWeather = (weather) => dispatch => {
    console.log('fetch weather action called')
    let searchTerm = document.getElementById("searchInput").value;
    const apiKey = '7a8953553232f2c3d6b7d21ba4797b07';

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + ',us&APPID=' + apiKey)


        .then(res => res.json())
        //
        .then(data => dispatch({
            type: FETCH_WEATHER,
            payload: data,
            city: document.getElementById("searchInput").value
        }))
        .then(data => console.log(data));
    }


export const fetchEvents = (events) => dispatch => {
    
    console.log('action for events called');
    let searchTerm = document.getElementById("searchInput").value;
    axios.get('http://localhost:3000/api/events' + searchTerm)
        .then(data => dispatch({
            type: FETCH_EVENTS,
            payload: data.data.events.event
        }))
        .then(payload => console.log(payload))
      //  .then(res => console.log(res.data))
        .catch(function (error) {
            console.log(error);
        })
    }

export const searchNew = (dispatch) => {
    console.log('searchNew action called');
    dispatch({
        type: SEARCH_NEW
    })
}
