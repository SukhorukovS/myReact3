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
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
          </a>
            <ul>
              {items.map((item, idx) => <li key={idx} className="dropdown-menu" aria-labelledby="navbarDropdown"><a className="dropdown-item" href={item.link}>{item.title}</a></li>)}
            </ul>
        </div>
      </div>
    )
  }
} 