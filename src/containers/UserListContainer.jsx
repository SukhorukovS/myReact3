import React, { PureComponent } from 'react';

import UserList from '../components/Users/UserList';
import Loading from '../components/Loading';

export default class UserListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          users,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          users: [],
          loading: false
        });
      });
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>{ loading ? <Loading /> : <UserList users={users} /> }</div>
    );
  }
}
