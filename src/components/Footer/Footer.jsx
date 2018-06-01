import './Footer.scss';
import React, { PureComponent } from 'react';

import classNames from 'classnames';

export default class Footer extends PureComponent {
  render () {
    return (
      <div>
        <footer className="footer container">
          <div className="container">
            <span className="text-muted">Place sticky footer content here.</span>
          </div>
        </footer>
      </div>
    )
  }
} 