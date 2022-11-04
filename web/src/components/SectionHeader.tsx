import { FC, PropsWithChildren } from 'react';

export const SectionHeader: FC<PropsWithChildren> = (properties) => {
    return (
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-ens-gradient-primary">
            {properties.children}
        </div>
    );
};
