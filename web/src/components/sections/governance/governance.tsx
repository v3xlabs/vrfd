import { SectionHeader } from '@components/SectionHeader';
import { FC } from 'react';

export const GovernanceSection: FC = () => {
    return (
        <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center flex flex-col gap-4">
                <SectionHeader>Governance</SectionHeader>
                <div>
                    VRFD.eth was developed by V3XLabs during a hackathon at ETH
                    San Francisco.
                </div>
            </div>
        </div>
    );
};
