import { AboutSection } from '@components/sections/about/about';
import { CTASection } from '@components/sections/cta/cta';
import { Footer } from '@components/sections/footer/footer';
import { GovernanceSection } from '@components/sections/governance/governance';
import { HistorySection } from '@components/sections/history/history';
import { UsageSection } from '@components/sections/usage/usage';
import { FC } from 'react';

export const HomePage: FC = () => {
    return (
        <div
            className="flex flex-col
            w-full min-h-screen
            bg-grey1"
        >
            <div className="flex flex-col pb-48 gap-10">
                <CTASection />
                <div className="flex flex-col gap-24 sm:gap-48">
                    <AboutSection />
                    <UsageSection />
                    <GovernanceSection />
                    <HistorySection />
                </div>
            </div>
            <Footer />
        </div>
    );
};
