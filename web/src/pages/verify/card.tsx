import checkMark from '@assets/check.svg';
import { Button, Card as ThorinCard, Skeleton } from '@ensdomains/thorin';
import { cx } from '@utils/cx';
import { FetchEnsAddressResult } from '@wagmi/core';
import { DOMAttributes, FC, ReactNode, useState } from 'react';
import { ChevronLeft } from 'react-feather';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEnsAvatar, useSignMessage } from 'wagmi';

import {
    FormDataFields,
    FormDataFieldsData,
} from '../../components/FormDataFields';

export const Card: FC<{
    name: string;
    address: FetchEnsAddressResult;
    verifiedData: VerifiedData;

    children: ReactNode;
    backPressed?: DOMAttributes<HTMLButtonElement | HTMLDivElement>['onClick'];
}> = ({ name, address, children, backPressed, verifiedData }) => {
    const {
        data: avatar,
        isError: avatarError,
        isLoading: avatarLoading,
    } = useEnsAvatar({
        addressOrName: name,
    });

    return (
        <ThorinCard className="w-full !px-8 !pt-8">
            <div className="flex flex-wrap gap-4 mb-4">
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
                <div className="contents sm:flex flex-col gap-2 text-left">
                    <div className="flex items-start md:items-center">
                        <h2 className="text-3xl sm:mt-2">{name}</h2>
                        {verifiedData.verified && (
                            <img
                                src={checkMark}
                                alt="Check mark icon"
                                className="w-4 ml-[2px]"
                            />
                        )}
                    </div>
                    <span className="text-md break-all text-grey2">
                        {address}
                    </span>
                </div>
            </div>

            <div className="h-[3px] w-full bg-grey1" />

            {backPressed !== undefined && (
                <div className="flex items-center gap-4 mt-4">
                    <button
                        onClick={backPressed}
                        className="hover:bg-gray-100 rounded p-1"
                    >
                        <ChevronLeft height="30px" width="30px" />
                    </button>
                    Go back
                </div>
            )}

            {children}
        </ThorinCard>
    );
};

export type VerifiedData = {
    verified: boolean;
    vrfdAddress: FetchEnsAddressResult | undefined;
    fields: {
        name: string;
        value: string;
    }[];
};

export const InfoCard: FC<{
    name: string;
    address: FetchEnsAddressResult;
    verifiedData: VerifiedData;

    onApply: DOMAttributes<HTMLButtonElement>['onClick'];
    onDispute: DOMAttributes<HTMLButtonElement>['onClick'];
}> = ({ name, address, onApply: onApply, onDispute, verifiedData }) => {
    return (
        <Card name={name} address={address} verifiedData={verifiedData}>
            <div className="flex flex-wrap flex-col sm:flex-row gap-x-4 gap-y-6 justify-between mt-4">
                {verifiedData.verified && (
                    <>
                        <div className="flex flex-wrap justify-center gap-4 px-4 sm:contents">
                            {verifiedData.fields.map((field) => (
                                <div
                                    className="flex flex-col gap-1"
                                    key={field.name + field.value}
                                >
                                    <span className="text-lg font-semibold text-black">
                                        {field.name}
                                    </span>
                                    <span className="text-md break-all text-grey3">
                                        {field.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <Button
                            className="!rounded-lg sm:!w-1/3 sm:mt-0 ml-auto"
                            onClick={onDispute}
                            tone="red"
                        >
                            Dispute
                        </Button>
                    </>
                )}
                {!verifiedData.verified && (
                    <>
                        <div className="text-lg">
                            This profile is not verified yet.
                        </div>
                        <Button
                            className="!rounded-lg sm:!w-1/2 sm:mt-0 ml-auto"
                            onClick={onApply}
                        >
                            Verify this name
                        </Button>
                    </>
                )}
            </div>
        </Card>
    );
};

export const ApplyCard: FC<{
    name: string;
    address: FetchEnsAddressResult;
    verifiedData: VerifiedData;
    onSubmit: SubmitHandler<FormDataFieldsData>;
    onBack: () => void;
    defaultData?: FormDataFieldsData;
}> = ({ name, address, onBack, verifiedData, onSubmit, defaultData }) => {
    const [noFields, setNofield] = useState(defaultData == undefined);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormDataFieldsData>({
        reValidateMode: 'onSubmit',
        mode: 'all',
        defaultValues: defaultData,
        resolver: async (values) => {
            setNofield(
                !Object.values(values).some((v) => v !== '' && v !== ' ')
            );

            return {
                values,
                errors: {},
            };
        },
    });

    return (
        <Card
            name={name}
            address={address}
            verifiedData={verifiedData}
            backPressed={onBack}
        >
            <div className="mt-3 mb-7 flex flex-col gap-2 text-left">
                <p className="text-base">
                    Fill out as many fields as you would like, but at least{' '}
                    <span className="font-bold">one is required</span>.
                </p>
            </div>
            <FormDataFields
                register={register as any}
                onSubmit={handleSubmit(onSubmit)}
            >
                {noFields && (
                    <p className="text-red text-left">
                        At least one field needs to be filled out.
                    </p>
                )}

                <div className="flex items-center justify-center w-full">
                    <Button
                        className="!rounded-lg sm:!w-1/2 sm:mt-0"
                        type="submit"
                        disabled={noFields}
                    >
                        Continue
                    </Button>
                </div>
            </FormDataFields>
        </Card>
    );
};

export const VerifyInformationCard: FC<{
    name: string;
    address: FetchEnsAddressResult;
    verifiedData: VerifiedData;
    defaultData: FormDataFieldsData;
    onBack: () => void;
    onSuccess: () => void;
}> = ({ name, address, onBack, onSuccess, verifiedData, defaultData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormDataFieldsData>({ defaultValues: defaultData });

    const { data: signedData, signMessageAsync } = useSignMessage();

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const onSubmit: SubmitHandler<FormDataFieldsData> = async (data) => {
        const ndata: Partial<FormDataFieldsData> = {};

        for (const key of Object.keys(data) as (keyof FormDataFieldsData)[]) {
            if (data[key] && data[key].trim() != '') {
                ndata[key] = data[key];
            }
        }

        const signed_data_request = await signMessageAsync({
            message: JSON.stringify({
                type: 'vrfd-verification',
                name,
                data: ndata,
            }),
        });

        if (signed_data_request) {
            onSuccess();
        }
    };

    return (
        <Card
            name={name}
            address={address}
            verifiedData={verifiedData}
            backPressed={onBack}
        >
            <div className="mt-3 mb-7 flex flex-col gap-2 text-left">
                <p className="text-base">
                    Verify the provided information. If everything looks good,
                    press the Submit button.
                </p>
            </div>
            <FormDataFields
                readonly
                register={register as any}
                onSubmit={handleSubmit(onSubmit)}
                hideThese={
                    Object.fromEntries(
                        Object.entries(defaultData).map((value) => [
                            value[0],
                            value[1].trim() == '',
                        ])
                    ) as any
                }
            >
                <div className="text-left">
                    <p className="text-xs">
                        Upon clicking submit, you will stake 0.04ETH.
                    </p>
                    <p className="text-xs">
                        If the application gets approved you will{' '}
                        <span className="font-bold">get the ETH back</span> (-
                        gas fees), but if the information is incorrect you will{' '}
                        <span className="font-bold">
                            not recieve the ETH back
                        </span>
                        .
                    </p>
                </div>
                <div className="flex w-full gap-5">
                    <Button
                        className="!bg-red !rounded-lg !w-1/2 sm:mt-0"
                        onClick={onBack}
                    >
                        Back
                    </Button>
                    <Button
                        loading={isSubmitting}
                        disabled={isSubmitting}
                        className="!rounded-lg !w-1/2 sm:mt-0"
                        type="submit"
                    >
                        Submit
                    </Button>
                </div>
            </FormDataFields>
        </Card>
    );
};

export const SuccessCard: FC<{
    name: string;
    address: FetchEnsAddressResult;
    verifiedData: VerifiedData;

    onBack: () => void;
}> = ({ name, address, verifiedData, onBack }) => {
    return (
        <Card name={name} address={address} verifiedData={verifiedData}>
            <div className="flex flex-col items-center justify-center py-10 gap-2">
                <h1 className="text-4xl font-medium">Success</h1>
                <p className="text-base">
                    You have successfully filed an verification application for{' '}
                    {name}.{' '}
                </p>

                <Button className="!w-52 mt-4" onClick={onBack}>
                    Go to Info
                </Button>
            </div>
        </Card>
    );
};
