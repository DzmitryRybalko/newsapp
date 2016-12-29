import React from 'react';

import './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    let reloadTimes = window.localStorage.getItem('reloadTimes') || 0;
    ++reloadTimes;
    window.localStorage.setItem('reloadTimes', reloadTimes);

    this.state = {
      reloadTimes,
    };
  }

  componentDidMount() {
    console.log('mount');
    setTimeout(() => {

    }, 1000 * 60 * 60 * 24);
  }

  render() {
    const time = new Date(Date.now()).toDateString();
    return (
      <div className="header">
        <div className="container">
          <div className="title">{`News App - ${time}`}</div>
          <div className="reloads">You load this page {this.state.reloadTimes} times.</div>
        </div>
      </div>
    );
  }
}

export default Header;
