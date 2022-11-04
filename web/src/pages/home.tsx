import { AboutSection } from '@components/sections/about/about';
import { CTASection } from '@components/sections/cta/cta';
import { Footer } from '@components/sections/footer/footer';
import { FC } from 'react';

export const HomePage: FC = () => {
    return (
        <div className="bg-grey1 w-full min-h-screen">
            hello from home page
            <CTASection />
            <AboutSection />
            <Footer />
        </div>
    );
};
