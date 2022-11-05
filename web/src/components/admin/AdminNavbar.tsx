import { cx } from '@utils/cx';
import { FC, ReactNode } from 'react';
import { AlertCircle, FileText, Home } from 'react-feather';
import { Link } from 'react-router-dom';

const NavItem: FC<{ children: ReactNode; active?: boolean; to: string }> = (
    properties
) => {
    return (
        <Link
            to={properties.to}
            className={cx(
                'transition duration-200 flex items-center gap-4 px-5 py-4 w-full rounded-2xl',
                properties.active && 'bg-neutral-800',
                'hover:bg-neutral-700'
            )}
        >
            {properties.children}
        </Link>
    );
};

export type PagesType = 'home' | 'applications' | 'disputes';

export const AdminNavbar: FC<{
    active: PagesType;
}> = (properties) => {
    return (
        <nav className="w-[18rem] min-w-[18rem] bg-neutral-900 text-white pl-4 pr-5 py-5">
            <Link
                to="/"
                className="font-bold text-3xl flex my-10 justify-center"
            >
                vrfd.eth
            </Link>

            <div className="flex flex-col gap-1">
                <NavItem active={properties.active == 'home'} to="/admin">
                    <Home />
                    <span>Home</span>
                </NavItem>
                <NavItem
                    active={properties.active == 'applications'}
                    to="/admin/applications"
                >
                    <FileText />
                    <span>Applications</span>
                </NavItem>
                <NavItem
                    active={properties.active == 'disputes'}
                    to="/admin/disputes"
                >
                    <AlertCircle />
                    <span>Disputes</span>
                </NavItem>
            </div>
        </nav>
    );
};
