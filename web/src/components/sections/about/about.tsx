import { SectionHeader } from '@components/SectionHeader';
import { Button } from '@ensdomains/thorin';
import { FC } from 'react';

import Container from '../../Container';

export const AboutSection: FC = () => {
    return (
        <Container>
            <SectionHeader>About</SectionHeader>
            <p className="max-w-lg">
                vrfd.eth is a decentralized on-chain blue checkmark system that
                allows users to submit the information they think is sufficient
                to verify they are the rightful owner of a domain.
            </p>
            <div className="w-44">
                <Button variant="primary">Get involved</Button>
            </div>
        </Container>
    );
};
