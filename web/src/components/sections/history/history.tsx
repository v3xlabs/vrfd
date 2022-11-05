import Container from '@components/Container';
import { Link } from '@components/Link';
import { SectionHeader } from '@components/SectionHeader';
import { FC } from 'react';

export const HistorySection: FC = () => {
    return (
        <Container>
            <SectionHeader>Who What Why Where?</SectionHeader>
            <p>
                Originally based off of a blogpost by{' '}
                <Link href="https://mirror.xyz/jefflau.eth/0PMm9s7G_a9KpXiYGnfWPuhNntZqJFlpmuVlSJbCD6s">
                    Jeff Lau
                </Link>
                , vrfd.eth was built as an initiative by V3XLabs during the{' '}
                <Link href="https://sf.ethglobal.com/">ETHSanFrancisco</Link>{' '}
                hackathon.
            </p>
        </Container>
    );
};
