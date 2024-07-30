import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Products from './pages/Products';
import Error from './components/Error';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/products', element: <Products /> },
      ],
    },
  ]);

  return (
    <>
      {/* <h1>React Router</h1> */}
      <RouterProvider router={router} />
    </>
  );
};
export default App;
