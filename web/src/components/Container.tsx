import { cx } from '@utils/cx';
import { FC, ReactNode } from 'react';

const Container: FC<{
    children: ReactNode;
    className?: string;
    noPadding?: boolean;
    size?: 'large' | 'small';
}> = (properties) => {
    return (
        <div
            className={cx(
                'h-full flex w-full',
                !properties.noPadding && 'px-4'
            )}
        >
            <div
                className={cx(
                    'w-full mx-auto text-center flex flex-col items-center gap-6',
                    properties.size == undefined || properties.size == 'large'
                        ? 'max-w-2xl'
                        : 'max-w-md',
                    properties.className
                )}
            >
                {properties.children}
            </div>
        </div>
    );
};

export default Container;
