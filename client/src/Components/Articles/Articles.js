import React, { Component } from "react";
import "./Articles.css";


class Articles extends Component {

  render() {
    let articles = this.props.articles.map(article => 
      <div key={article.id}>
      {/* <img src={article.image.thumbnail} alt='articleImg'/> */}
       <span><a href={article.url}>{article.name}</a></span>
        <span>{article.description}</span>
      </div>)
    return (
      <div id='articles'>
        {articles}

      </div>

    );

  }
}
export default Articles;


