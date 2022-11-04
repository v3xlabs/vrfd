import { Button } from '@ensdomains/thorin';
import { FC } from 'react';

export const AboutSection: FC = () => {
    return (
        <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center flex flex-col gap-4">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-ens-gradient-primary">
                    About
                </div>
                <div>
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </div>
                <div>
                    <Button variant="primary">Test Button</Button>
                </div>
            </div>
        </div>
    );
};
