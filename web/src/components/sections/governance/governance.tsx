import Container from '@components/Container';
import { SectionHeader } from '@components/SectionHeader';
import { Button } from '@ensdomains/thorin';
import { FC } from 'react';

export const GovernanceSection: FC = () => {
    return (
        <Container>
            <SectionHeader>Governance</SectionHeader>
            <p className="max-w-lg">
                In its current state vrfd.eth allows us to specify a wallet
                address as &quot;trusted&quot; this means that that wallet has
                the ability to approve and deny cases, aswell as revoke names.
                In the ideal situation this would be the address of a DAO
                working group, or a multi-signature wallet.
            </p>
            <div className="w-44">
                <Button variant="primary">Get involved</Button>
            </div>
        </Container>
    );
};
