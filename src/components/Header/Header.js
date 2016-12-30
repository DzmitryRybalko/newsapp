import React from 'react';

import './Header.scss';

const RESET_LOAD_TIMEOUT = 1000 * 60 * 60 * 24;

class Header extends React.Component {
  constructor(props) {
    super(props);

    const reloadTimes = this.changeReloadTimes(1);
    this.state = { reloadTimes };
  }

  componentDidMount() {
    setTimeout(() => this.changeReloadTimes(-1), RESET_LOAD_TIMEOUT);
  }

  changeReloadTimes = (value) => {
    let reloadTimes = +window.localStorage.getItem('reloadTimes') || 0;
    reloadTimes += value;
    window.localStorage.setItem('reloadTimes', reloadTimes);

    return reloadTimes;
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
