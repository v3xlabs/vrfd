import { cx } from '@utils/cx';
import { FC, ReactNode } from 'react';

const Container: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className }) => {
    return (
        <div className="h-full flex w-full px-4">
            <div
                className={cx(
                    'w-full max-w-xl mx-auto text-center flex flex-col items-center gap-6',
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default Container;
