import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';

class App extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <Posts />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))