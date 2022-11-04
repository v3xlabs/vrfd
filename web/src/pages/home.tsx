import { FC } from 'react';
import { AboutSection } from '../components/sections/about/about';
import { CTASection } from '../components/sections/cta/cta';

export const HomePage: FC = () => {
  return (<div>
    hello from home page
    <CTASection />
    <AboutSection />
  </div>);
};
