import { 
    FETCH_POSTS, 
    NEW_POST, 
    FETCH_ARTICLES, 
    FETCH_WEATHER } from './types'
// import { removeAllListeners } from 'cluster';
//import cityList from './cityList.json'
//var YQL = require('yql');


// every action creator we need to export
export const fetchPosts = postsData => dispatch => {
    console.log('fetching');
    // thunk allows us to use dispatch function for async requests
    // dispatch - a resolver/promise when we want to send data
    
        // create fetch
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            // when receiving data, dispatch to the reducer
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
                })
            );
          }

export const createPost = postData => dispatch => {
    console.log('action called');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
        })
        )
    }

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
    let searchTerm = document.getElementById("searchInput").value; // .toLowerCase() may not work 
    const apiKey = '7a8953553232f2c3d6b7d21ba4797b07';

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + ',us&APPID=' + apiKey)

    
        .then(res => res.json())
    //
    .then(data => dispatch({
        type: FETCH_WEATHER,
        payload: data
    }))
    .then(data => console.log(data));
}

// to add a new action: - add it here
// in reducer, add new switch case
// in component - import the action, connect, and proptypes 
        // import { connect } from 'react-redux';
        // import PropTypes from 'prop-types';
        // import { createPost } from '../actions/postActions';
    // where you normally would do a fetch then update state, just call the action!
    // at bottom of component update the export:
        // export default connect(mapStateToProps, { fetchPosts })(Posts);
