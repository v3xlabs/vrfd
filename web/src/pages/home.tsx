import { AboutSection } from '@components/sections/about/about';
import { CTASection } from '@components/sections/cta/cta';
import { EasyToUseSection } from '@components/sections/easytouse/easyToUseSection';
import { Footer } from '@components/sections/footer/footer';
import { GovernanceSection } from '@components/sections/governance/governance';
import { FC } from 'react';

export const HomePage: FC = () => {
    return (
        <div
            className="flex flex-col
            w-full min-h-screen
            bg-grey1"
        >
            <CTASection />
            <div className="flex flex-col gap-24">
                <AboutSection />
                <EasyToUseSection />
                <GovernanceSection />
            </div>
            <Footer />
        </div>
    );
};
