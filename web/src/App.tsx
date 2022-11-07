import '@rainbow-me/rainbowkit/styles.css';

import { lightTheme, ThorinGlobalStyles } from '@ensdomains/thorin';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { FC } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { NotFoundPage } from './pages/404';
import { AdminNameDetailsPage } from './pages/admin/applications/[name]/page';
import { ApplicationPage } from './pages/admin/applications/page';
import { AdminNameDisputeDetailsPage } from './pages/admin/disputes/[name]/page';
import { DisputesPage } from './pages/admin/disputes/page';
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
                element: <Root />,

                children: [
                    {
                        path: '/admin',
                        element: <AdminPage />,
                    },
                    {
                        path: '/admin/applications',
                        element: <Root />,

                        children: [
                            {
                                path: '/admin/applications',
                                element: <ApplicationPage />,
                            },
                            {
                                path: '/admin/applications/:name',
                                element: <AdminNameDetailsPage />,
                            },
                        ],
                    },
                    {
                        path: '/admin/disputes',
                        element: <Root />,

                        children: [
                            {
                                path: '/admin/disputes',
                                element: <DisputesPage />,
                            },
                            {
                                path: '/admin/disputes/:name',
                                element: <AdminNameDisputeDetailsPage />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);

const { chains, provider, webSocketProvider } = configureChains(
    [chain.mainnet, chain.polygon],
    [publicProvider()]
);

const { connectors } = getDefaultWallets({
    appName: 'vrfd.eth',
    chains,
});

const client = createClient({
    autoConnect: true,
    provider,
    connectors,
    webSocketProvider,
});

function App() {
    return (
        <div>
            <WagmiConfig client={client}>
                <RainbowKitProvider
                    chains={chains}
                    // theme={darkTheme()}
                    appInfo={{
                        appName: 'vrfd.eth',
                        // disclaimer: ,
                        learnMoreUrl: 'https://vrfd.app',
                    }}
                >
                    <ThemeProvider theme={lightTheme}>
                        <ThorinGlobalStyles />
                        <RouterProvider router={router} />
                    </ThemeProvider>
                </RainbowKitProvider>
            </WagmiConfig>
        </div>
    );
}

export default App;
