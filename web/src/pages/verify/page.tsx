import Container from '@components/Container';
import { Layout } from '@components/Layout';
import { CTASection } from '@components/sections/cta/cta';
import { FetchEnsAddressResult } from '@wagmi/core';
import { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEnsAddress } from 'wagmi';

import { ApplyCard, Card, InfoCard, VerifiedData } from './card';

const addEnsIfNot = (input: string | null) =>
    input ? (input.includes('.') ? input : `${input}.eth`) : undefined;

const Profile: FC<{ name: string; address: FetchEnsAddressResult }> = ({
    name,
    address,
}) => {
    const [cardToShow, setCardToShow] = useState<'apply' | 'info' | 'dispute'>(
        'info'
    );

    const { data, isLoading, isError } = useEnsAddress({
        name: name + '.vrfd.eth',
    });

    const verifiedData: VerifiedData = {
        verified: data === address,
        vrfdAddress: data,
        fields: [
            {
                name: 'Legal Name',
                value: 'Jakob Helgesson',
            },
            {
                name: 'Twitter',
                value: '@helgesson_',
            },
            {
                name: 'Telegram',
                value: '@helgesson',
            },
            {
                name: 'Website',
                value: 'helgesson.dev',
            },
            {
                name: 'Discord',
                value: 'Svemat#5531',
            },
        ],
    };

    return (
        <>
            {/* <div className="flex justify-center items-center flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-7 md:gap-14 items-center">
                    <h2 className="text-4xl">{name}</h2>
                </div>
                <span className="text-md break-all text-grey2">{address}</span>
            </div> */}

            {cardToShow == 'info' && (
                <InfoCard
                    name={name}
                    address={address}
                    onApply={() => setCardToShow('apply')}
                    onDispute={() => setCardToShow('dispute')}
                    verifiedData={verifiedData}
                />
            )}

            {cardToShow == 'apply' && (
                <ApplyCard
                    name={name}
                    address={address}
                    onBack={() => setCardToShow('info')}
                    verifiedData={verifiedData}
                />
            )}

            {cardToShow == 'dispute' && (
                <Card
                    name={name}
                    address={address}
                    backPressed={() => {
                        setCardToShow('info');
                    }}
                    verifiedData={verifiedData}
                >
                    Work in progress
                </Card>
            )}
        </>
    );
};

export const VerifyPage: FC = () => {
    const [searchParameters, _setSearchParaters] = useSearchParams();

    console.log({ searchParameters: searchParameters.get('name') });

    const name = addEnsIfNot(searchParameters.get('name'));

    const { data, isLoading, isError } = useEnsAddress({
        name,
    });

    return (
        <Layout>
            <CTASection initialInputValue={name} />

            <Container>
                {name ? (
                    <>
                        {isLoading && !isError && !data && (
                            <div>Loading...</div>
                        )}
                        {isError && !isLoading && !data && <div>Error</div>}
                        {data && !isLoading && !isError && (
                            <Profile name={name} address={data} />
                        )}
                        {!data && !isLoading && !isError && (
                            <div>Not found</div>
                        )}
                    </>
                ) : (
                    <div className="text-4xl text-gray pb-32">
                        You need to enter a name to verify
                    </div>
                )}
            </Container>
        </Layout>
    );
};
