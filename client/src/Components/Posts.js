import React, { Component } from 'react'
// To get posts from the store:
    // connects components to the redux store that was provided by the Provider
    import {connect } from 'react-redux';
    import { fetchPosts, fetchArticles } from '../actions/postAction';
import PropTypes from 'prop-types' 

class Posts extends Component {
  // dont need constructor because the posts comes from redux/the store  
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           posts: []
  //       }
  //   }
  componentWillMount() {
    // call the action to get posts! 
    // 2 checks:
    // 1) use console.log in actions/postAction.js to see if its getting called
    // 2) use console.log in reducer
    this.props.fetchPosts();
    
  }

  searchArticles() {
    this.props.fetchArticles();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) 
    this.props.posts.unshift(nextProps.newPost);

    // if(nextProps.articles)
    // this.props

  }



  render() {
    //const newArticles = this.props.articles
    const articleItems = this.props.newsArticles ? this.props.newsArticles.map(article => 
      <div key={article.id}>
        <h2><a href={article.url}>{article.name}</a></h2>
        <h3>{article.description}</h3>
      </div>
    ) : null;
    // this.props.posts - determined MapStateToProps property
      const postItems = this.props.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
      ))
    return (
      <div>
    


      
      <div>
          <label>City:</label><br/>
          <input id='searchInput' type='text'/>
      </div>
     
      <div type='submit' onClick={() => this.searchArticles()}>Submit</div>

      
        <h1>Articles</h1>
        {articleItems}
        
        <h1> Posts </h1>
        {postItems}

      </div>
    )
  }
}

// Posts - component name, fetchPosts - imported postAction, posts - mapStatetoProps
Posts.propTypes = {
  fetchPosts: PropTypes.func.isrequired,
  posts: PropTypes.array.isRequired,
  fetchArticles: PropTypes.func.isrequired,
}
// bring in newly added items in the state to the component
const mapStateToProps = state => ({
  // property posts - determined in index.js (root reducer) - posts: postReducer
  // posts.item - determined by postReducer: items: action.payload
  posts: state.posts.items,
  newPost: state.posts.item,
  newsArticles: state.posts.articles
})
export default connect(mapStateToProps, { fetchPosts, fetchArticles })(Posts);

