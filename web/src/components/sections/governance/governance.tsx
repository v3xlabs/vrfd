import Container from '@components/Container';
import { SectionHeader } from '@components/SectionHeader';
import { Button } from '@ensdomains/thorin';
import { FC } from 'react';

export const GovernanceSection: FC = () => {
    return (
        <Container>
            <SectionHeader>Governance</SectionHeader>
            <p className="max-w-lg">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
            <div className="w-44">
                <Button variant="primary" size={'extraSmall'}>
                    Get involved
                </Button>
            </div>
        </Container>
    );
};
