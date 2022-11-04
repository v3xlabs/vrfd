import { FC } from 'react';

import Container from './Container';

export const Navbar: FC = () => {
    return (
        <nav className="z-50 w-full h-16 absolute top-0 left-0">
            <Container>
                <div className="h-full flex items-center">
                    <a
                        className="text-white hover:underline cursor-pointer"
                        href="/"
                    >
                        vrfd.eth
                    </a>
                </div>
            </Container>
        </nav>
    );
};
