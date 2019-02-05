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
    const articles = this.state.news
      .filter(article => article.urlToImage)
      .map(article => <Article article={article} key={article.url} />);

    const anyNews = !!articles.length;

    return (
      <div>
        <div>{anyNews ? articles : null}</div>
        <div>
          {!this.state.isFetching && !anyNews ? (
            <div className="text-center">No results found</div>
          ) : null}
        </div>
        <div>
          {!this.state.isFetching && anyNews && (
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
