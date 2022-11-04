import Container from '@components/Container';
import { SectionHeader } from '@components/SectionHeader';
import { FC } from 'react';

export const WhoWhatWhyWhereSection: FC = () => {
    return (
        <Container>
            <SectionHeader>Who What Why Where?</SectionHeader>
            <div className="font-bold text-neutral-700">
                VRFD.eth was developed by V3XLabs during a hackathon at{' '}
                <a
                    target="_blank"
                    href="https://sf.ethglobal.com/"
                    rel="noreferrer"
                    className="text-blue hover:brightness-90"
                >
                    ETH San Francisco.
                </a>
            </div>
        </Container>
    );
};
