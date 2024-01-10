import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { Home } from './pages/home/Home';
import { Education } from './pages/education/Education';
import { Login } from './pages/login/Login';

export const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'education',
        element: <Education />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
