import { FC } from 'react';

export const Navbar: FC = () => {
    return (
        <nav className="z-50 w-full h-16 absolute top-0 left-0 px-8">
            <div className="h-full flex items-center justify-end gap-4">
                <a
                    className="text-white hover:underline cursor-pointer"
                    href="/"
                >
                    vrfd.eth
                </a>
                <a
                    className="text-white hover:underline cursor-pointer"
                    href="https://github.com/v3xlabs/vrfd"
                    target="_blank"
                    rel="noreferrer"
                >
                    Source
                </a>
                <a
                    className="text-white hover:underline cursor-pointer"
                    href="https://mirror.xyz/jefflau.eth/0PMm9s7G_a9KpXiYGnfWPuhNntZqJFlpmuVlSJbCD6s"
                    target="_blank"
                    rel="noreferrer"
                >
                    Whitepaper
                </a>
            </div>
        </nav>
    );
};
