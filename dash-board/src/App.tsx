import './App.css';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Users from './pages/users';
import Products from './pages/Products';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Login from './pages/Login';
import '../src/styles/global.scss';
function App() {
  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/users', element: <Users /> },
        { path: '/products', element: <Products /> },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
