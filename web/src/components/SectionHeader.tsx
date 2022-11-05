import { FC, PropsWithChildren } from 'react';

export const SectionHeader: FC<PropsWithChildren> = (properties) => {
    return (
        <h2 className="overflow-visible text-4xl h-fit py-2 -my-4 font-bold text-transparent bg-clip-text bg-ens-gradient-primary">
            {properties.children}
        </h2>
    );
};
