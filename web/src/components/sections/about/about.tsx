import { SectionHeader } from '@components/SectionHeader';
import { Button } from '@ensdomains/thorin';
import { FC } from 'react';

import Container from '../../Container';

export const AboutSection: FC = () => {
    return (
        <Container className="lg:py-10">
            <SectionHeader>About</SectionHeader>
            <p className="max-w-lg">
                vrfd.eth is a decentralized on-chain blue checkmark system that
                allows users to submit information to verify they are the
                rightful owner of a domain. Their case will then be reviewed and
                the system will decide wether or not they should to be verified
                or not.
            </p>
            <div className="w-44">
                <Button variant="primary">Read More</Button>
            </div>
        </Container>
    );
};
