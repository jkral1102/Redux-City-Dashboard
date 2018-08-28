import { 
    FETCH_POSTS, 
    NEW_POST, 
    FETCH_ARTICLES } 
    from './types'

const $ = require('jquery')

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

export const fetchArticles = articles => dispatch => {
    let searchTerm = $('.searchInput').val();
    console.log(searchTerm)
    console.log('fetch google city news action called')
    //http://news.google.com/news?q=apple&output=rss
    let url = ('http://news.google.com/news?' + 'q=' + searchTerm + '&output=rss');
    //https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=microsoft&count=10&offset=0&mkt=en-us&safeSearch=Moderate
    let url2 = ('https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=microsoft&count=10&offset=0&mkt=en-us&safeSearch=Moderate')
    console.log(url2)
    fetch(url2)
    .then(res => res.json())
    .then(articles => console.log(articles))
    // .then(articles => dispatch({
    //     type: FETCH_ARTICLES,
    //     payload: articles
    // }))
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
