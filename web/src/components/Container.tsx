import { FC, ReactNode } from 'react';

const Container: FC<{
    children: ReactNode;
}> = (properties) => {
    return (
        <div className="h-full flex w-full px-4">
            <div className="w-full max-w-xl mx-auto text-center flex flex-col items-center gap-6">
                {properties.children}
            </div>
        </div>
    );
};

export default Container;
