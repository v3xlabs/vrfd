import { Button, Card, Dropdown, Input, Skeleton } from '@ensdomains/thorin';
import { cx } from '@utils/cx';
import { FC } from 'react';
import { ChevronLeft } from 'react-feather';
import { useNavigate, useParams } from 'react-router';
import { useEnsAddress, useEnsAvatar } from 'wagmi';

import { ApplicationsContainer } from '../applicationsContainer';

const psuedoFields: Record<
    string,
    { twitter: string; telegram: string; legalName: string }
> = {
    'robiot.eth': {
        twitter: 'notrobiot',
        telegram: 'robi0t',
        legalName: 'Elliot',
    },
    'luc.computer': {
        twitter: 'LucemansNL',
        telegram: 'lucemans',
        legalName: 'Luc',
    },
};

export const AdminNameDetailsPage: FC = () => {
    const { name } = useParams<{
        name: string;
    }>();

    const {
        data: avatar,
        isError: avatarError,
        isLoading: avatarLoading,
    } = useEnsAvatar({
        addressOrName: name,
    });

    const {
        data: address,
        isLoading,
        isError,
    } = useEnsAddress({
        name,
    });

    const nav = useNavigate();

    return (
        <ApplicationsContainer>
            <Card className="flex flex-col">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <div className="flex items-center gap-4 mb-5">
                            <button
                                onClick={() => {
                                    nav('/admin/applications');
                                }}
                                className="hover:bg-gray-100 rounded p-1"
                            >
                                <ChevronLeft height="30px" width="30px" />
                            </button>
                            Go back
                        </div>
                        {isError ? (
                            <p>Could not fetch ENS data</p>
                        ) : (
                            <div className="border-b pb-6 mb-6 flex justify-center items-center flex-col gap-5">
                                <div className="flex flex-col md:flex-row gap-7 md:gap-14 items-center">
                                    <Skeleton
                                        loading={avatarLoading}
                                        className={cx(
                                            'w-28 h-28 rounded-3xl',
                                            !avatarLoading &&
                                                avatar == undefined &&
                                                'hidden'
                                        )}
                                    >
                                        <img
                                            className="w-28 rounded-3xl"
                                            src={
                                                avatar == undefined
                                                    ? undefined
                                                    : avatar
                                            }
                                            alt="Profile"
                                        />
                                    </Skeleton>
                                    <h2 className="text-4xl">{name}</h2>
                                </div>
                                <span className="text-md break-all text-grey2">
                                    {address}
                                </span>
                            </div>
                        )}

                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-6">
                                {psuedoFields[name!].twitter !== undefined && (
                                    <Input
                                        readOnly
                                        label="Twitter"
                                        value={psuedoFields[name!].twitter}
                                    />
                                )}

                                {psuedoFields[name!].telegram !== undefined && (
                                    <Input
                                        readOnly
                                        label="Telegram"
                                        value={psuedoFields[name!].telegram}
                                    />
                                )}

                                {psuedoFields[name!].legalName !==
                                    undefined && (
                                    <Input
                                        readOnly
                                        label="Legal Name"
                                        value={psuedoFields[name!].legalName}
                                    />
                                )}
                            </div>

                            <div className="flex flex-col md:flex-row gap-5">
                                <Button className="!bg-green">Approve</Button>
                                <Dropdown
                                    label="Deny"
                                    color="red"
                                    className="!w-96"
                                    items={[
                                        {
                                            label: 'as Incorrect',
                                            onClick: () => {},
                                            color: 'red',
                                        },
                                        {
                                            label: 'as Typo',
                                            onClick: () => {},
                                            color: 'red',
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </>
                )}
            </Card>
        </ApplicationsContainer>
    );
};
