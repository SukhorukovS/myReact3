import './Card.scss';
import React, { PureComponent } from 'react';

import classNames from 'classnames';

export default class Card extends PureComponent {
  static defaultProps = {
    content: []
  }

  render () {
    const { content } = this.props;

    return (
      <div className="row">
        {content.map((content, idx) => <div key={idx} className="card border-primary mb-3 col-6">
          <div className="card-header">
          <a href={content.link}>{content.category}</a>
          </div>
          <div className="card-body text-primary">
            <h4 className="card-title">{content.title}</h4>
            <p className="card-text">{content.text}</p>
          </div>
        </div>)}
      </div>
    )
  }
} 