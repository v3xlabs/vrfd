import { SectionHeader } from '@components/SectionHeader';
import { Button } from '@ensdomains/thorin';
import { FC } from 'react';

import Container from '../../Container';

export const AboutSection: FC = () => {
    return (
        <Container>
            <SectionHeader>About</SectionHeader>
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
