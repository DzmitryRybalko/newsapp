import React, { Component } from "react";

class Header extends Component {
  render() {
    const date = new Date().toLocaleDateString();

    return (
      <div className="p-4 bg-dark text-light">
        <div className="text-center">
          <h4>News app</h4>
          <div>{date}</div>
        </div>
      </div>
    );
  }
}

export default Header;
