import React from 'react';
import { connect } from 'react-redux';

import './Footer.scss';

import { setFilter } from '../../actions/NewsActions';

let timeout;

class Footer extends React.Component {
  static propTypes = {
    setFilter: React.PropTypes.func.isRequired,
  }

  onInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      this.props.setFilter(value);
    }, 500);
  };

  render() {
    return (
      <div className="footer">
        <div className="container">
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
