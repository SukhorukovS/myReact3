import './Header.scss';
import React, { PureComponent } from 'react';

import classNames from 'classnames';
import Dropdown from '../Dropdown';
const dropItems = [
  { link: '#', title: 'Home' },
  { link: '#', title: 'News' },
  { link: '#', title: 'About' }
]


export default class Header extends PureComponent {
  render () {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
        <Dropdown items={dropItems}/>
      </div>
    )
  }
} 