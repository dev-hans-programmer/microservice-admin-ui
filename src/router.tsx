import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home-page';
import CategoryPage from './pages/category-page';
import LoginPage from './pages/login';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <HomePage />,
   },
   {
      path: '/auth/login',
      element: <LoginPage />,
   },
   {
      path: '/categories',
      element: <CategoryPage />,
   },
]);
