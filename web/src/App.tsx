import { lightTheme, ThorinGlobalStyles } from '@ensdomains/thorin';
import { FC } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { NotFoundPage } from './pages/404';
import { AdminPage } from './pages/admin/page';
import { HomePage } from './pages/home';
import { VerifyPage } from './pages/verify/page';

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
                path: '/admin',
                element: <AdminPage />,
                // loader: teamLoader,
            },
        ],
    },
]);

const { chains, provider, webSocketProvider } = configureChains(
    [chain.mainnet, chain.polygon],
    [publicProvider()]
);

const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
});

function App() {
    return (
        <div>
            <WagmiConfig client={client}>
                <ThemeProvider theme={lightTheme}>
                    <ThorinGlobalStyles />
                    <RouterProvider router={router} />
                </ThemeProvider>
            </WagmiConfig>
        </div>
    );
}

export default App;
