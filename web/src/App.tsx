import { lightTheme, ThorinGlobalStyles } from '@ensdomains/thorin';
import { FC } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { NotFoundPage } from './pages/404';
import { HomePage } from './pages/home';
import { VerifyPage } from './pages/verify';

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
        errorElement: <NotFoundPage />,
        // loader: rootLoader,
        children: [
            {
                path: '/',
                element: <HomePage />,
                // loader: teamLoader,
            },
            {
                path: '/verify',
                element: <VerifyPage />,
                // loader: teamLoader,
            },
            {
                path: '*',
                element: <NotFoundPage />,
                // loader: teamLoader,
            },
        ],
    },
]);

function App() {
    return (
        <div className="w-full max-w-full min-h-screen bg-white">
            <ThemeProvider theme={lightTheme}>
                <ThorinGlobalStyles />
                <RouterProvider router={router} />
            </ThemeProvider>
        </div>
    );
}

export default App;
