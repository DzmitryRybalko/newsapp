import React, { Component } from "react";
import Waypoint from "react-waypoint";
import PropTypes from "prop-types";

import Article from "../Article";
import FeedService from "../../Services/FeedService";

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = { news: [], isFetching: false };
  }

  componentDidMount() {
    this.fetchNews(1);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.setState({ news: [] });
      this.fetchNews(this.state.page);
    }
  }

  fetchNews = page => {
    this.setState({ isFetching: true });
    FeedService.getNews({ page, q: this.props.query }).then(news => {
      if (this.state) news = [...this.state.news, ...news];
      this.setState({ news, page, isFetching: false });
    });
  };

  onWaypointEnter = () => {
    this.fetchNews(this.state.page + 1);
  };

  render() {
    let articles = null;

    if (this.state.news.length)
      articles = this.state.news
        .filter(article => article.urlToImage)
        .map(article => <Article article={article} key={article.url} />);

    if (!this.state.isFetching)
      articles = this.state.isFetching ? null : (
        <div className="text-center">No results found</div>
      );

    return (
      <div>
        <div>{articles}</div>
        <div>
          {!this.state.isFetching && (
            <Waypoint onEnter={this.onWaypointEnter} />
          )}
        </div>
      </div>
    );
  }
}

Feed.propTypes = {
  query: PropTypes.string
};
