import { FC } from 'react';

import Container from '../../Container';

export const EasyToUseSection: FC = () => {
    return (
        <Container>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-ens-gradient-primary">
                Easy to use!
            </div>
            <div className="font-bold text-neutral-800 max-w-sm">
                Checking for verification is as simple as comparing two ENS
                names against each other.
            </div>
            <div className="flex flex-col py-4 px-6 shadow-md bg-white rounded-xl text-lg font-bold">
                <span>
                    <span>vitalik.eth</span>
                    <span className="text-neutral-600">
                        <span className={'p-2'}>{'//'}</span>
                        0xd8d&hellip;96045
                    </span>
                </span>
                <span>==</span>
                <span>
                    <span>vitalik.eth.vrfd.eth</span>
                    <span className="text-neutral-600">
                        <span className={'p-2'}>{'//'}</span>
                        0xd8d&hellip;96045
                    </span>
                </span>
            </div>
        </Container>
    );
};
