import './Posts.scss';
import React, { PureComponent } from 'react';

import classNames from 'classnames';
import Card from '../Card'

const content = [
  { link: '#', category: 'Some category', title: 'Primary card title', text:'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
  { link: '#', category: 'Some category', title: 'Primary card title', text:'Some quick example text to build on the card title and make up the bulk of the card\'s content.' }
];

export default class Posts extends PureComponent {
  render () {
    return (
      <div className="row mt-2">
        <Card content={content}/>
      </div>
    )
  }
} 