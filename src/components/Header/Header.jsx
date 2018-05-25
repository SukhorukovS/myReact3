import './Header.css';
import React, { Component } from 'react';

import classNames from 'classnames';

export default class Header extends Component {
  static defaultProps = {
    size: 'maxi'
  }

  render () {
    const { size } = this.props;
    const headerClasses = classNames({
      header: true,
      'header-mini': size === 'mini',
      'header-maxi': size === 'maxi',
    });

    return (
      <div className={headerClasses}>Hello from Header</div>
    )
  }
} 