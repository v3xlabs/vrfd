import { Footer } from '@components/sections/footer/footer';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: FC = () => {
    return (
        <div
            className="flex flex-col justify-center items-center
            w-full min-h-screen
            bg-grey1"
        >
            <div
                className="text-5xl font-bold text-transparent
            bg-clip-text bg-ens-gradient-primary
            h-full mt-auto p-3"
            >
                Page not found
            </div>
            <div className="text-xl font-semibold">
                The page you are looking for does not exist.
            </div>
            <Link to={'/'}>
                <div className="text-xl font-semibold text-blue hover:brightness-75">
                    Go back to home page
                </div>
            </Link>

            <Footer />
        </div>
    );
};
