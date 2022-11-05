import { FC, ReactNode } from 'react';

import { AdminNavbar, PagesType } from './AdminNavbar';

export const AdminLayout: FC<{ children: ReactNode; activePage: PagesType }> = (
    properties
) => {
    return (
        <>
            <div className="flex w-full min-h-screen bg-grey1">
                <AdminNavbar active={properties.activePage} />
                <div className="p-8 w-full">{properties.children}</div>
            </div>
        </>
    );
};