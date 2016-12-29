import React from 'react';

import './News.scss';

import Like from '../Like';

class News extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    urlToImage: React.PropTypes.string,
    url: React.PropTypes.string.isRequired,
  }

  render() {
    const src = this.props.urlToImage || 'http://placekitten.com/g/118/80';

    return (
      <div className="news">
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
          <div className="news-header">
            {this.props.title}
          </div>
          <div className="news-body">
            <div className="news-description">{this.props.description}</div>
            <div className="news-image">
              <img src={src} alt="news-description" />
            </div>
            <Like />
          </div>
        </a>
      </div>

    );
  }
}

export default News;
