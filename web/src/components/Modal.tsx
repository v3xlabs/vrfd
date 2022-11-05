import { Card } from '@ensdomains/thorin';
import { cx } from '@utils/cx';
import { FC, ReactNode } from 'react';

import Container from './Container';

export const Modal: FC<{
    children: ReactNode;
    open: boolean;
    label: string;
    // onDismiss: () => void;
}> = (properties) => {
    return (
        <div
            className={cx(
                !properties.open && 'hidden',
                'fixed top-0 left-0 h-full w-full bg-opacity-20 bg-grey2'
            )}
        >
            <Container size="small">
                <div className="flex w-full h-full items-center justify-center text-left">
                    <Card className="w-full flex flex-col gap-5">
                        <h1 className="text-2xl font-bold">
                            {properties.label}
                        </h1>
                        {properties.children}
                    </Card>
                </div>
            </Container>
        </div>
    );
};
