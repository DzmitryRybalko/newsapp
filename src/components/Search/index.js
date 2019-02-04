import React, { Component } from "react";
import PropTypes from "prop-types";
import "./search.scss";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      search: ""
    };

    this.timerId = null;
  }

  onFocus = () => this.setState({ focus: true });

  onBlur = () => {
    if (this.state.search.length === 0) this.setState({ focus: false });
  };

  searchUpdate = e => {
    this.setState({ search: e.target.value }, () => {
      clearTimeout(this.timerId);
      this.timerId = setTimeout(() => {
        this.props.onSearchChange(this.state.search);
      }, this.props.timeout);
    });
  };

  render() {
    return (
      <div className="search-wrapper">
        <label
          className={`search ${this.state.focus ? "search__active" : ""}`}
          htmlFor="search"
        >
          <input
            onChange={this.searchUpdate}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            placeholder="Search..."
            id="search"
            type="text"
          />
        </label>
      </div>
    );
  }
}

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  timeout: PropTypes.number
};

Search.defaultProps = {
  timeout: 1000
};
