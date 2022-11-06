/* eslint-disable sonarjs/no-duplicate-string */
import Container from '@components/Container';
import { Layout } from '@components/Layout';
import { CTASection } from '@components/sections/cta/cta';
import { FetchEnsAddressResult } from '@wagmi/core';
import { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEnsAddress } from 'wagmi';

import { FormDataFieldsData } from '../../components/FormDataFields';
import {
    ApplyCard,
    Card,
    InfoCard,
    SuccessCard,
    VerifiedData,
    VerifyInformationCard,
} from './card';

const addEnsIfNot = (input: string | null) =>
    input ? (input.includes('.') ? input : `${input}.eth`) : undefined;

const psuedoFields: Record<string, VerifiedData> = {
    'helgesson.eth': {
        verified: true,
        vrfdAddress: '0xd577D1322cB22eB6EAC1a008F62b18807921EFBc',
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
    },
    'v3x.eth': {
        verified: true,
        vrfdAddress: '0x225f137127d9067788314bc7fcc1f36746a3c3B5',
        fields: [
            {
                name: 'Legal Name',
                value: 'Luc van Kampen',
            },
            {
                name: 'Twitter',
                value: '@LucemansNL',
            },
            {
                name: 'Website',
                value: 'luc.computer',
            },
            {
                name: 'Discord',
                value: 'Lucemans#2066',
            },
        ],
    },
    'luc.computer': {
        verified: true,
        vrfdAddress: '0x225f137127d9067788314bc7fcc1f36746a3c3B5',
        fields: [
            {
                name: 'Legal Name',
                value: 'Luc van Kampen',
            },
            {
                name: 'Twitter',
                value: '@LucemansNL',
            },
            {
                name: 'Website',
                value: 'luc.computer',
            },
            {
                name: 'Discord',
                value: 'Lucemans#2066',
            },
        ],
    },
};

const Profile: FC<{ name: string; address: FetchEnsAddressResult }> = ({
    name,
    address,
}) => {
    const [cardToShow, setCardToShow] = useState<
        // Apply flow
        | 'apply'
        | 'verifyInfo'
        | 'success'
        // Other
        | 'info'
        | 'dispute'
    >('info');

    const { data, isLoading, isError } = useEnsAddress({
        name: name + '.vrfd.eth',
    });

    const psuedoData = psuedoFields[name];

    const verifiedData: VerifiedData = psuedoData || {
        verified: false,
    };

    const [formData, setFormData] = useState<FormDataFieldsData>();

    return (
        <>
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
                    defaultData={formData}
                    onSubmit={(data) => {
                        setFormData(data);
                        setCardToShow('verifyInfo');
                    }}
                    onBack={() => setCardToShow('info')}
                    verifiedData={verifiedData}
                />
            )}

            {cardToShow == 'verifyInfo' && formData !== undefined && (
                <VerifyInformationCard
                    onSuccess={() => {
                        setCardToShow('success');
                    }}
                    name={name}
                    address={address}
                    onBack={() => setCardToShow('apply')}
                    verifiedData={verifiedData}
                    defaultData={formData}
                />
            )}

            {cardToShow == 'success' && (
                <SuccessCard
                    name={name}
                    address={address}
                    onBack={() => {
                        // eslint-disable-next-line unicorn/no-useless-undefined
                        setFormData(undefined);
                        setCardToShow('info');
                    }}
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
