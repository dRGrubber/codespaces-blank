import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
// import ArticlePage, { loader as articleLoader } from './pages/ArticlePage';
import ArticlePage from './pages/ArticlePage';
import axios from 'axios'
import ArticlesListPage from './pages/ArticlesListPage';
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

const routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <NotFoundPage />,
  children: [{
    path: '/',
    element: <HomePage />
  }, {
    path: '/about',
    element: <AboutPage />
  }, {
    path: '/articles',
    element: <ArticlesListPage />
  }, {
    path: '/articles/:name',
    element: <ArticlePage />,
    // loader: articleLoader
    loader: async function({ params }) {
        const response = await axios.get('/api/articles/' + params.name);
        const { upvotes, comments } = response.data;
        return { upvotes, comments };
    }
  }, {
    path: '/login',
    element: <LoginPage />
  }, {
    path: 'create-account',
    element: <CreateAccountPage />
  }]
}];
;

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}