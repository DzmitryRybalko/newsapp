import React, { Component } from "react";

import PropTypes from "prop-types";

export default class Article extends Component {
  render() {
    const publicationDate = new Date(
      this.props.article.publishedAt
    ).toLocaleString();
    const articlePicture = this.props.article.urlToImage ? (
      <img
        className="card-img"
        src={this.props.article.urlToImage}
        alt={this.props.article.title}
      />
    ) : null;

    return (
      <article className="article">
        <div className="card">
          <div className="card-header">
            <div>{this.props.article.source.name}</div>
            <div className="text-muted">{publicationDate}</div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{this.props.article.title}</h5>
            <div className="text-muted">{this.props.article.author}</div>
            <div className="card-text">
              <div>{this.props.article.description}</div>
              <a
                href={this.props.article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read more
              </a>
            </div>
            {articlePicture}
          </div>
        </div>
      </article>
    );
  }
}

Article.propTypes = {
  article: PropTypes.object
};
