import { Navbar } from '@components/Navbar';
import { Footer } from '@components/sections/footer/footer';
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
        <div>
            <ThemeProvider theme={lightTheme}>
                <ThorinGlobalStyles />
                <Navbar />
                <div className="flex flex-col w-full min-h-screen bg-grey1">
                    <RouterProvider router={router} />
                    <Footer />
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
