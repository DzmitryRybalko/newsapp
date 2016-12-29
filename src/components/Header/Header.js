import React from 'react';

import './Header.scss';

class Header extends React.Component {
  render() {
    const time = new Date(Date.now()).toDateString();
    return (
      <div className="header">
        <div className="container">
          <div className="title">{`News App - ${time}`}</div>
        </div>
      </div>
    );
  }
}

export default Header;
