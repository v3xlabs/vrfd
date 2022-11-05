import { cx } from '@utils/cx';
import { FC, ReactNode, useState } from 'react';
import { AlertCircle, FileText, Home, Menu, X } from 'react-feather';
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
    const [mobileNavActive, setMobileNavActive] = useState(false);

    return (
        <>
            <nav className="z-50 block lg:hidden sticky top-0 left-0 w-full bg-neutral-900 h-14 px-5">
                <div className="flex items-center justify-between h-full w-full text-white">
                    <button
                        onClick={() => {
                            setMobileNavActive(!mobileNavActive);
                        }}
                    >
                        {mobileNavActive ? <X /> : <Menu />}
                    </button>

                    <Link
                        to="/"
                        className="font-bold text-xl flex my-10 justify-center"
                    >
                        vrfd.eth
                    </Link>
                </div>
            </nav>
            <nav
                className={cx(
                    mobileNavActive &&
                        'z-40 fixed top-0 lg:static h-screen !block',
                    'hidden lg:block w-[18rem] min-w-[18rem] bg-neutral-900 text-white pl-4 pr-5 py-5'
                )}
            >
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
        </>
    );
};
