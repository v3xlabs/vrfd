import { FC, ReactNode } from 'react';

const Container: FC<{
    children: ReactNode;
}> = (properties) => {
    return (
        <div className="h-full flex w-full px-4">
            <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-4">
                {properties.children}
            </div>
        </div>
    );
};

export default Container;
