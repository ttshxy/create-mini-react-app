import AsyncComponent from '../utils/AsyncComponent';
const Home = AsyncComponent(() => import('../Page/Home'));
const Admin = AsyncComponent(() => import('../Page/Admin'));
export default [
  {
    path: '/',
    component: Home,
    exact: true,
    key: 'home',
  },
  {
    path: '/admin',
    component: Admin,
    exact: true,
    key: 'Admin',
  },
];
