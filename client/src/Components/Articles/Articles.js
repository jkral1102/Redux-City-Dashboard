import React, { Component } from "react";
import "./Articles.css";


class Articles extends Component {

  render() {
    let articles = this.props.articles.map((article, i) => 
      <div id='article' key={i}>
      {/* <img src={article.image.thumbnail} alt='articleImg'/> */}
      <div id='articleTitle'>
        {article.image && <img alt='articleIcon' src={article.image.thumbnail.contentUrl}/>}
       <a href={article.url}>{article.name}</a>
       </div>
        <div id='articleBody'>{article.description}</div>
        
      </div>)
    return (
      <div id='articlesDiv'>
        <div id='articlesTitle'>
            <span>Local News</span>
        </div>
        <div>
        {articles}
        </div>

      </div>

    );

  }
}
export default Articles;


