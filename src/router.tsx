import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home-page';
import CategoryPage from './pages/category-page';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <HomePage />,
   },
   {
      path: '/categories',
      element: <CategoryPage />,
   },
]);
