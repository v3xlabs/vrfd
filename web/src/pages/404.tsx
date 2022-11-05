import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full min-h-screen">
            <div className="absolute top-0 left-0 bg-black w-full h-16"></div>
            <h1
                className="text-5xl font-bold text-transparent
            bg-clip-text bg-ens-gradient-primary p-3"
            >
                Page not found
            </h1>
            <div className="text-xl font-semibold">
                The page you are looking for does not exist.
            </div>
            <Link to={'/'}>
                <div className="text-xl font-semibold text-blue hover:brightness-75">
                    Go back to home page
                </div>
            </Link>
        </div>
    );
};
