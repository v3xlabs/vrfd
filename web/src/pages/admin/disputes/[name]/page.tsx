import { Modal } from '@components/Modal';
import { Button, Card, Input, Skeleton } from '@ensdomains/thorin';
import { cx } from '@utils/cx';
import { FC, useState } from 'react';
import { ChevronLeft } from 'react-feather';
import { useNavigate, useParams } from 'react-router';
import { useEnsAddress, useEnsAvatar } from 'wagmi';

import { DisputesContainer } from '../disputesContainer';

const psuedoFields: Record<string, { reason: string }> = {
    'helgesson.eth': {
        reason: 'I am the fake Jacob Helgesson and I want to steal his name',
    },
};

export const AdminNameDisputeDetailsPage: FC = () => {
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

    const [modalOpen, setModalOpen] = useState(false);

    const [modalData, setModalData] = useState<{
        title: string;
        type: string;
        denyAs?: string;
    }>();

    return (
        <DisputesContainer>
            <Card className="flex flex-col">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <div className="flex items-center gap-4 mb-5">
                            <button
                                onClick={() => {
                                    nav('/admin/disputes');
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
                                {psuedoFields[name!].reason !== undefined && (
                                    <Input
                                        readOnly
                                        label="Reason"
                                        value={psuedoFields[name!].reason}
                                    />
                                )}
                            </div>

                            <div className="flex flex-col gap-5">
                                <Button
                                    className="!bg-green"
                                    onClick={() => {
                                        setModalData({
                                            title: 'Approve',
                                            type: 'approve',
                                        });
                                        setModalOpen(true);
                                    }}
                                >
                                    Approve
                                </Button>
                                <div className="flex flex-col md:flex-row gap-5">
                                    <Button
                                        className="!bg-red"
                                        onClick={() => {
                                            setModalData({
                                                title: 'Deny as Incorrect',
                                                type: 'deny',
                                                denyAs: 'Incorrect',
                                            });
                                            setModalOpen(true);
                                        }}
                                    >
                                        Deny as Incorrect
                                    </Button>
                                    <Button
                                        className="!bg-red"
                                        onClick={() => {
                                            setModalData({
                                                title: 'Deny as Typo',
                                                type: 'deny',
                                                denyAs: 'Typo',
                                            });
                                            setModalOpen(true);
                                        }}
                                    >
                                        Deny as Typo
                                    </Button>
                                </div>
                            </div>

                            {modalData !== undefined && modalOpen && (
                                <Modal label={modalData.title} open>
                                    Are you sure you want to {modalData.type}{' '}
                                    this dispute
                                    {modalData.denyAs != undefined
                                        ? ` as ${modalData.denyAs}`
                                        : ''}
                                    ?
                                    <div className="flex gap-5">
                                        <Button
                                            onClick={() => {
                                                nav('/admin/disputes');
                                            }}
                                        >
                                            Confirm
                                        </Button>
                                        <Button
                                            className="!bg-red"
                                            onClick={() => {
                                                setModalOpen(false);
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </Modal>
                            )}
                        </div>
                    </>
                )}
            </Card>
        </DisputesContainer>
    );
};
