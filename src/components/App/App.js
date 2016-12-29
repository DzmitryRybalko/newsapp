import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from '../../shared/promiseMiddleware';

import './App.scss';
import Header from '../Header';
import NewsList from '../NewsList';
import Footer from '../Footer';
import reducer from '../../reducers';

const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <NewsList />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
