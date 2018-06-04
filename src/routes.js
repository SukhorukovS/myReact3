import UserList from 'containers/UserListContainer';
import Posts from 'components/Posts'

export default [
  {
    path: '/',
    component: UserList,
    exact: true
  },
  {
    path: '/posts',
    component: Posts,
    exact: true
  }
]