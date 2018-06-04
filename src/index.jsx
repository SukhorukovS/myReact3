import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';

class App extends Component {
  render () {
    return (
      <div className="container">
        <BrowserRouter>
          <Header>
            <Switch>
              {routes.map((route, idx) => <Route key={idx} {...route} />)}
            </Switch>
          </Header>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))