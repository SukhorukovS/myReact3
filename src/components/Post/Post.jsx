import './Post.scss';
import React, { PureComponent } from 'react';

import classNames from 'classnames';

export default class Post extends PureComponent {
  render () {
    return (
      <div>
        <div className="row mt-2">
          <div className="card border-primary mb-3 col-6">
            <div className="card-header">Header</div>
            <div className="card-body text-primary">
              <h4 className="card-title">Primary card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card border-primary mb-3 col-6">
            <div className="card-header">Header</div>
            <div className="card-body text-primary">
              <h4 className="card-title">Primary card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 