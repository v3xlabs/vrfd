import checkMark from '@assets/check.svg';
import {
    Button,
    Card as ThorinCard,
    Input,
    Skeleton,
} from '@ensdomains/thorin';
import { cx } from '@utils/cx';
import { FetchEnsAddressResult } from '@wagmi/core';
import { DOMAttributes, FC, ReactNode } from 'react';
import { ChevronLeft } from 'react-feather';
import { useEnsAvatar } from 'wagmi';

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

    onBack: () => void;
}> = ({ name, address, onBack, verifiedData }) => {
    return (
        <Card
            name={name}
            address={address}
            verifiedData={verifiedData}
            backPressed={onBack}
        >
            <div className="flex flex-col gap-4 mt-4">
                {/* Legal Name, Twitter, Telegram, Website, Discord, Trademark, Other */}
                <Input label="Legal Name" placeholder="Enter your legal name" />
                <Input
                    label="Twitter"
                    placeholder="Enter your Twitter handle"
                />
                <Input
                    label="Telegram"
                    placeholder="Enter your Telegram handle"
                />
                <Input label="Website" placeholder="Enter your website" />
                <Input
                    label="Discord"
                    placeholder="Enter your Discord handle"
                />
                <Input label="Trademark" placeholder="Enter your trademark" />
                <Input label="Other" placeholder="Enter other information" />

                <Button
                    className="!rounded-lg sm:!w-1/2 sm:mt-0 ml-auto"
                    onClick={onBack}
                    type="submit"
                >
                    Sign and submit
                </Button>
            </div>
        </Card>
    );
};
