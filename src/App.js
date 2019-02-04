import React, { Component } from "react";
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import Search from "./Components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
  }

  onSearchChange = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mb-5">
          <div className="my-4">
            <Search onSearchChange={this.onSearchChange} />
          </div>
          <Feed query={this.state.query} />
        </div>
      </div>
    );
  }
}

export default App;
