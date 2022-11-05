import { AboutSection } from '@components/sections/about/about';
import { CTASection } from '@components/sections/cta/cta';
import { GovernanceSection } from '@components/sections/governance/governance';
import { HistorySection } from '@components/sections/history/history';
import { UsageSection } from '@components/sections/usage/usage';
import { FC } from 'react';

export const HomePage: FC = () => {
    return (
        <div className="flex flex-col gap-10">
            <CTASection />
            <div className="flex flex-col gap-24 sm:gap-48">
                <AboutSection />
                <UsageSection />
                <GovernanceSection />
                <HistorySection />
            </div>
        </div>
    );
};
