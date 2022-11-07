import checkMark from '@assets/check.svg';
import filecoinImage from '@assets/filecoin.png';
import {
    Button,
    Card as ThorinCard,
    Skeleton,
    Textarea,
} from '@ensdomains/thorin';
import { ConnectButton } from '@rainbow-me/rainbowkit';
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
            setNofield(!Object.values(values).some((v) => v.trim() !== ''));

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

    const data: Partial<FormDataFieldsData> = {};

    for (const key of Object.keys(
        defaultData
    ) as (keyof FormDataFieldsData)[]) {
        if (defaultData[key] && defaultData[key].trim() != '') {
            data[key] = defaultData[key];
        }
    }

    const message = {
        type: 'vrfd-verification',
        name,
        data,
    };

    const onSubmit: SubmitHandler<FormDataFieldsData> = async (data) => {
        const signed_data_request = await signMessageAsync({
            message: JSON.stringify(message),
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
                    press the Sign & Upload button.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-5">
                    <Textarea
                        label="Message"
                        readOnly
                        className="!font-normal"
                        style={{ minHeight: '200px' }}
                        value={JSON.stringify(message, undefined, 4)}
                    />

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                        <div className="flex flex-col xs:flex-row w-full justify-between items-center">
                            <span className="font-bold">
                                Calculated Upload Price
                            </span>
                            <div className="flex gap-2 items-center">
                                <span className="font-bold">0.01</span>
                                <img
                                    src={filecoinImage}
                                    className="h-6"
                                    alt="Filecoin"
                                />
                            </div>
                        </div>
                        <div className="flex w-full sm:w-fit gap-4 items-center">
                            <Button
                                loading={isSubmitting}
                                disabled={isSubmitting}
                                className="!w-full md:!w-40 !rounded-lg"
                                type="submit"
                            >
                                Sign & Upload
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </Card>
    );
};

export const ConnectWalletCard: FC<{
    name: string;
    address: FetchEnsAddressResult;
    verifiedData: VerifiedData;

    onBack: () => void;
}> = ({ name, address, verifiedData, onBack }) => {
    return (
        <Card
            name={name}
            address={address}
            verifiedData={verifiedData}
            backPressed={onBack}
        >
            <div className="text-left mt-5">
                <p className="text-base">
                    You will need to connect your wallet to continue.
                </p>

                <ConnectButton.Custom>
                    {({ openConnectModal }) => {
                        return (
                            <Button
                                onClick={openConnectModal}
                                className="!w-52 mt-4"
                            >
                                Connect wallet
                            </Button>
                        );
                    }}
                </ConnectButton.Custom>
            </div>
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

export const DisputeCard: FC<{
    name: string;
    address: FetchEnsAddressResult;
    verifiedData: VerifiedData;

    onBack: () => void;
}> = ({ name, address, verifiedData, onBack }) => {
    const { register, handleSubmit } = useForm<{ reason: string }>();

    return (
        <Card
            name={name}
            backPressed={onBack}
            address={address}
            verifiedData={verifiedData}
        >
            <form
                onSubmit={handleSubmit(() => {
                    onBack();
                })}
            >
                <div className="mt-6 flex flex-col gap-4">
                    <Textarea
                        label="Describe the reson for this dispute"
                        placeholder="Reson for the dispute"
                        {...register('reason')}
                    />

                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Card>
    );
};
