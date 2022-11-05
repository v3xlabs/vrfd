import { FC, ReactNode } from 'react';

import { Navbar } from './Navbar';
import { Footer } from './sections/footer/footer';

export const Layout: FC<{ children: ReactNode; noFooter?: boolean }> = (
    properties
) => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col w-full min-h-screen bg-grey1">
                {properties.children}
                {!properties.noFooter && <Footer />}
            </div>
        </div>
    );
};
