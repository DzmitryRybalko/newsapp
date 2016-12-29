import React from 'react';

import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="mail">
            <a href="mailto:dmitry_rybalko@smartexlab.com">Contact us</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
