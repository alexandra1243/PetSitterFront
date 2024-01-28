import { lazy } from 'react';

const Home = lazy(() => import('pages/home'));

export const routes = [{
  path: '/',
  exact: true,
  component: Home,
  isPublic: true
}];
