import { CtaWaved } from '@components/CtaWaved';
import { FC } from 'react';

export const VerifyPage: FC = () => {
    return (
        <div
            className="flex flex-col
            w-full min-h-screen
            bg-grey1"
        >
            <CtaWaved>
                <div className="flex flex-col items-center gap-4 justify-center h-full">
                    <h1 className="text-white text-5xl font-bold">Verify</h1>
                </div>
            </CtaWaved>
        </div>
    );
};
