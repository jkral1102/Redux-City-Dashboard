import React, { Component } from "react";
import "./Articles.css";


class Articles extends Component {

  render() {
    let articles = this.props.articles.map((article, i) => 
      <div key={i}>
      {/* <img src={article.image.thumbnail} alt='articleImg'/> */}
       <span id='articleTitle'><a href={article.url}>{article.name}</a></span>
        <span id='articleBody'>{article.description}</span>
        {article.image && <img alt='articleIcon' src={article.image.thumbnail.contentUrl}/>}
      </div>)
    return (
      <div id='articlesDiv'>
        <div id='articlesTitle'>
            <span>Local Headlines</span>
        </div>
        <div>
        {articles}
        </div>

      </div>

    );

  }
}
export default Articles;


