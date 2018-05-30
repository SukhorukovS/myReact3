import './Header.scss';
import React, { PureComponent } from 'react';

import classNames from 'classnames';
import Menu from '../Menu';

const menuItems = [
  { link: '#', title: 'Главная' },
  { link: '#', title: 'Блог' },
  { link: '#', title: 'Пользователи' },
  { link: '#', title: 'Комментарии' }
];

export default class Header extends PureComponent {
  render () {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
          <a className="navbar-brand" href="#">Navbar</a>
          <Menu menuItems={menuItems} />
        </nav>
      </div>
    )
  }
} 