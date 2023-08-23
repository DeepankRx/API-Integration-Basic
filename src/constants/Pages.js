import Login from '../components/Login';
import Home from '../components/Home';
import AddInward from '../components/AddInward';
const Pages = [
  {
    path: '/login',
    component: Login,
    name: 'Login',
    loginRequired: false,
  },
  {
    path: '/',
    component: Home,
    name: 'Home',
    loginRequired: true,
  },
  {
    path: '/add_inward',
    component: AddInward,
    name: 'AddInward',
    loginRequired: true,
  }
];

export { Pages };
