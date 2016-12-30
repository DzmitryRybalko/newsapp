import React from 'react';
import { connect } from 'react-redux';

import './Footer.scss';

import { setFilter } from '../../actions/NewsActions';

let timeout;
const RESET_LOAD_TIMEOUT = 1000 * 60 * 60 * 24;

class Footer extends React.Component {
  static propTypes = {
    setFilter: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const reloadTimes = this.changeReloadTimes(1);
    this.state = { reloadTimes };
  }

  componentDidMount() {
    setTimeout(() => this.changeReloadTimes(-1), RESET_LOAD_TIMEOUT);
  }

  onInputChange = (event) => {
    if (timeout) clearTimeout(timeout);

    const value = event.target.value.toLowerCase();
    timeout = setTimeout(() => {
      this.props.setFilter(value);
    }, 500);
  };

  changeReloadTimes = (value) => {
    let reloadTimes = +window.localStorage.getItem('reloadTimes') || 0;
    reloadTimes += value;
    window.localStorage.setItem('reloadTimes', reloadTimes);

    return reloadTimes;
  }

  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="reloads">
            You load this page {this.state.reloadTimes} times.
          </div>

          <div className="mail">
            <a href="mailto:dmitry_rybalko@smartexlab.com">Contact us</a>
          </div>

          <div className="search">
            <input type="text" placeholder="Search here" onChange={this.onInputChange} />
          </div>
        </div>
      </div>
    );
  }
}


const connectedFooter = connect(null, { setFilter })(Footer);


export default connectedFooter;
