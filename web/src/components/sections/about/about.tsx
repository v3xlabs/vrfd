import { Button } from '@ensdomains/thorin';
import { FC } from 'react';

import Container from '../../Container';

export const AboutSection: FC = () => {
    return (
        <Container>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-ens-gradient-primary">
                About
            </div>
            <div className="max-w-lg">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet.
            </div>
            <div className="w-48">
                <Button variant="primary">Get involved</Button>
            </div>
        </Container>
    );
};
