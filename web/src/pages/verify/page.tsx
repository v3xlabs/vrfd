import Container from '@components/Container';
import { Layout } from '@components/Layout';
import { CTASection } from '@components/sections/cta/cta';
import { Button, Skeleton } from '@ensdomains/thorin';
import { cx } from '@utils/cx';
import { FetchEnsAddressResult } from '@wagmi/core';
import { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEnsAddress, useEnsAvatar } from 'wagmi';

import { ApplyCardContent, Card, InfoCardContent } from './card';

const addEnsIfNot = (input: string | null) =>
    input != undefined
        ? input.includes('.')
            ? input
            : `${input}.eth`
        : undefined;

const Profile: FC<{ name: string; address: FetchEnsAddressResult }> = ({
    name,
    address,
}) => {
    const {
        data: avatar,
        isError: avatarError,
        isLoading: avatarLoading,
    } = useEnsAvatar({
        addressOrName: name,
    });

    const [cardToShow, setCardToShow] = useState<'apply' | 'info'>('info');

    return (
        <>
            <div className="flex justify-center items-center flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-7 md:gap-14 items-center">
                    <Skeleton
                        loading={avatarLoading}
                        className={cx(
                            'w-28 h-28 rounded-3xl',
                            !avatarLoading && avatar == undefined && 'hidden'
                        )}
                    >
                        <img
                            className="w-28 rounded-3xl"
                            src={avatar == undefined ? undefined : avatar}
                            alt="Profile"
                        />
                    </Skeleton>
                    <h2 className="text-4xl">{name}</h2>
                </div>
                <span className="text-md break-all text-grey2">{address}</span>
            </div>

            {cardToShow == 'info' && (
                <Card
                    title="Info"
                    bottom={
                        <Button
                            className="!rounded-lg"
                            onClick={() => setCardToShow('apply')}
                        >
                            Verify this name
                        </Button>
                    }
                >
                    <InfoCardContent
                        data={{ verified: false, verifiedAt: '2022/12/24' }}
                    />
                </Card>
            )}

            {cardToShow == 'apply' && (
                <Card
                    backPressed={() => {
                        setCardToShow('info');
                    }}
                    title="Apply for Verification"
                    bottom={<Button className="!rounded-lg">Submit</Button>}
                >
                    <ApplyCardContent address={address!} name={name} />
                </Card>
            )}
        </>
    );
};

const NameSection: FC<{ name: string }> = ({ name }) => {
    const { data, isLoading, isError } = useEnsAddress({
        name,
    });

    return (
        <>
            {isLoading && !isError && !data && <div>Loading...</div>}
            {isError && !isLoading && !data && <div>Error</div>}
            {data && !isLoading && !isError && (
                <Profile name={name} address={data} />
            )}
            {!data && !isLoading && !isError && <div>Not found</div>}
        </>
    );
};

export const VerifyPage: FC = () => {
    const [searchParameters, _setSearchParaters] = useSearchParams();

    const name = addEnsIfNot(searchParameters.get('name'));

    return (
        <Layout>
            <CTASection initialInputValue={name} />

            <Container>
                {name ? (
                    <NameSection name={name} />
                ) : (
                    <div className="text-4xl text-gray pb-32">
                        You need to enter a name to verify
                    </div>
                )}
            </Container>
        </Layout>
    );
};
