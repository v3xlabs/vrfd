import { AboutSection } from '@components/sections/about/about';
import { CTASection } from '@components/sections/cta/cta';
import { EasyToUseSection } from '@components/sections/easytouse/easyToUseSection';
import { Footer } from '@components/sections/footer/footer';
import { FC } from 'react';

export const HomePage: FC = () => {
    return (
        <div className="bg-grey1 w-full min-h-screen">
            hello from home page
            <CTASection />
            <AboutSection />
            <EasyToUseSection />
            <Footer />
        </div>
    );
};
