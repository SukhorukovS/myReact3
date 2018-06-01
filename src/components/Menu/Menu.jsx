import './Menu.scss';
import React, { PureComponent } from 'react';

import classNames from 'classnames';
import Dropdown from '../Dropdown';

const dropItems = [
  { link: '#', title: 'Home' },
  { link: '#', title: 'News' },
  { link: '#', title: 'About' }
];

export default class Header extends PureComponent {
  static defaultProps = {
    menuItems: []
  }

  render () {
    const { menuItems } = this.props;
    return (
      <div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {menuItems.map((item, idx) =>  <li key={idx} className="nav-item"><a className="nav-link" href={item.link}>{item.title}</a></li>)}
              <Dropdown items={dropItems}/>
            </ul>
          </div>
        </div>
      )
    }
  } 