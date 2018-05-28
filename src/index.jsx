import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';

class App extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <Post />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))