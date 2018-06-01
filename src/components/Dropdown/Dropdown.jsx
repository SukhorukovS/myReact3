import './Dropdown.scss';
import React, { PureComponent } from 'react';

export default class Dropdown extends PureComponent {
  static defaultProps = {
    items: []
  }

  render () {
    const { items } = this.props;

    return (
      <div>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {items.map((item, idx) => <a key={idx} className="dropdown-item" href={item.link}>{item.title}</a>)}
          </div>
        </li>
      </div>
    )
  }
} 