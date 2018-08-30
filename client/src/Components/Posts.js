import React, { Component } from 'react'
// To get posts from the store:
    // connects components to the redux store that was provided by the Provider
    import {connect } from 'react-redux';
    import { fetchPosts, fetchArticles, fetchWeather } from '../actions/postAction';
import PropTypes from 'prop-types' 
import Weather from './weather.js'

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  fetchCityData() {
    this.props.fetchArticles();
    this.props.fetchWeather();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) 
    this.props.posts.unshift(nextProps.newPost);
  }

  render() {
    //const newArticles = this.props.articles
    const articleItems = this.props.newsArticles ? 
    
      this.props.newsArticles.map(article => 
      <div key={article.id}>
        <h2><a href={article.url}>{article.name}</a></h2>
        <h3>{article.description}</h3>
      </div>
    ) : null;
    
    return (
      <div>
      <div>
          <label>City:</label><br/>
          <input id='searchInput' type='text'/>
      </div>
     
      <div type='submit' onClick={() => this.fetchCityData()}>Submit</div>
          {this.props.weather && 
                <div>
                  <h1>THE WEATHER:</h1>
                  <Weather weather={this.props.weather} />
                </div>
          }
        <h1>Articles</h1>
        {articleItems}
      </div>
    )
  }
}

// Posts - component name, fetchPosts - imported postAction, posts - mapStatetoProps
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  fetchWeather: PropTypes.func.isRequired
}
// bring in newly added items in the state to the component
const mapStateToProps = state => ({
  // property posts - determined in index.js (root reducer) - posts: postReducer
  // posts.item - determined by postReducer: items: action.payload
  posts: state.posts.items,
  newPost: state.posts.item,
  newsArticles: state.posts.articles,
  weather: state.posts.weather
})
export default connect(mapStateToProps, { fetchPosts, fetchArticles, fetchWeather })(Posts);

