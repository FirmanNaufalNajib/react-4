import Home from '../../pages/Home';
import Menu from '../../pages/Menu';
import MenuDetail from '../../pages/MenuDetail';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import ProtectedRoute from './ProtectedRoutes';
import Addmenu from '../../pages/Addmenu';

export const routeList = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/menu',
    element: (
    <ProtectedRoute>
      <Menu/>
    </ProtectedRoute>
    )
  },
  {
    path: '/menu/:id',
    element: (
    <ProtectedRoute>
      <MenuDetail />{" "}
    </ProtectedRoute>
    )
  },
  {
    path: '/login',
    element: 
        <Login />

  },
  {
    path: '/register',
    element: (
      <ProtectedRoute>
        <Register />
      </ProtectedRoute>
      )
  },
  {
    path: '/addmenu',
    element: (
      <ProtectedRoute>
        <Addmenu />
      </ProtectedRoute>
      )
  },
];

