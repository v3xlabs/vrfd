import { AboutSection } from '@components/sections/about/about';
import { CTASection } from '@components/sections/cta/cta';
import { EasyToUseSection } from '@components/sections/easytouse/easyToUse';
import { Footer } from '@components/sections/footer/footer';
import { GovernanceSection } from '@components/sections/governance/governance';
import { WhoWhatWhyWhereSection } from '@components/sections/whowhatwhywhere/whoWhatWhyWhere';
import { FC } from 'react';

export const HomePage: FC = () => {
    return (
        <div
            className="flex flex-col
            w-full min-h-screen
            bg-grey1"
        >
            <div className="flex flex-col gap-48 pb-48">
                <CTASection />
                <AboutSection />
                <EasyToUseSection />
                <GovernanceSection />
                <WhoWhatWhyWhereSection />
            </div>
            <Footer />
        </div>
    );
};
