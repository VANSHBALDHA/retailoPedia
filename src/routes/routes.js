import HomePage from '../pages/homepage';
import AboutPage from '../pages/aboutpage';
import ProfilePage from '../pages/profilepage';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/profile',
    component: ProfilePage,
  },
];

export default routes;