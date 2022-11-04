import { FC } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/home';

const Root: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        path: '/',
        element: <HomePage />,
        // loader: teamLoader,
      },
    ],
  },
]);

function App() {
  return (
    <div className="w-full max-w-full min-h-screen bg-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
