import React from 'react';
import { connect } from 'react-redux';

import './NewsList.scss';

import News from '../News';
import { getNews } from '../../actions/NewsActions';


class NewsList extends React.Component {
  static propTypes = {
    newsList: React.PropTypes.array.isRequired,
    getNews: React.PropTypes.func.isRequired,
    filter: React.PropTypes.string.isRequired,
  }

  componentWillMount() {
    this.props.getNews();
  }

  render() {
    const renderedNews = this.props.newsList
      .filter(news => news.title.toLowerCase().includes(this.props.filter)
        || (news.description && news.description.toLowerCase().includes(this.props.filter)))
      .map(news =>
        <News
          title={news.title}
          description={news.title}
          key={news.title}
          url={news.url}
          urlToImage={news.urlToImage}
          />,
    );

    return (
      <div className="newsList container">
        {renderedNews}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newsList: state.news.NewsList,
    filter: state.news.filter,
  };
}

const connectedNewsList = connect(mapStateToProps, { getNews })(NewsList);

export default connectedNewsList;
