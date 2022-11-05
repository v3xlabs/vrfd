import { SectionHeader } from '@components/SectionHeader';
import { FC } from 'react';

import Container from '../../Container';

export const UsageSection: FC = () => {
    return (
        <Container>
            <SectionHeader>Easy to use!</SectionHeader>
            <p className="max-w-sm">
                Checking for verification is as simple as comparing two ENS
                names against each other.
            </p>
            <div className="flex flex-col py-4 px-6 shadow-md bg-white rounded-xl text-lg font-bold">
                <span>
                    <span className="text-neutral-800">vitalik.eth</span>
                    <span className="text-neutral-600">
                        <span className={'p-2'}>{'//'}</span>
                        0xd8d&hellip;96045
                    </span>
                </span>
                <span>==</span>
                <span>
                    <span className="text-neutral-800">
                        vitalik.eth.vrfd.eth
                    </span>
                    <span className="text-neutral-600">
                        <span className={'p-2'}>{'//'}</span>
                        0xd8d&hellip;96045
                    </span>
                </span>
            </div>
        </Container>
    );
};
