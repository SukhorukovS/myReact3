import './Menu.css';
import React, { Component } from 'react';
import { link } from 'fs';

export default class Menu extends Component {
  static defaultProps = {
    items: []
  }
  render () {
    const { items } = this.props;

    return (
      <ul>
        {items.map((item) => <li><a href={item.link}>{item.title}</a></li>)}
      </ul>
    )
  }
} 