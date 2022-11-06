import { Button, Input, Textarea } from '@ensdomains/thorin';
import { WorldIDWidget } from '@worldcoin/id';
import { DOMAttributes, FC, ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';

export type FormDataFieldsData = {
    legalName: string;
    twitter: string;
    telegram: string;
    website: string;
    discord: string;
    trademark: string;
    other: string;
};

export const FormDataFields: FC<{
    onSubmit: DOMAttributes<HTMLFormElement>['onSubmit'];
    register: UseFormRegister<FormDataFieldsData>;
    children?: ReactNode;
    readonly?: boolean;
    hideThese?: Record<keyof FormDataFieldsData, boolean>;
}> = ({ onSubmit, register, children, readonly, hideThese }) => {
    const ensName = 'luc.computer';

    const shouldShow = (value: boolean | undefined) =>
        hideThese == undefined || (value != undefined && !value);

    return (
        <form className="flex flex-col gap-4 mt-4" onSubmit={onSubmit}>
            {/* Legal Name, Twitter, Telegram, Website, Discord, Trademark, Other */}
            {!readonly && (
                <WorldIDWidget
                    actionId={'wid-vrfd-eth-' + ensName.replace('.', '-')}
                    signal="my_signal"
                    onSuccess={(proof) => console.log(proof)}
                    onError={(error) => console.error(error)}
                    debug={true}
                />
            )}
            {shouldShow(hideThese?.legalName) && (
                <Input
                    label="Legal Name"
                    placeholder="Enter your legal name"
                    readOnly={readonly}
                    {...register('legalName')}
                />
            )}
            {shouldShow(hideThese?.twitter) && (
                <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-end">
                    <Input
                        label="Twitter"
                        placeholder="Enter your Twitter handle"
                        readOnly={readonly}
                        {...register('twitter')}
                    />
                    {!readonly && (
                        <Button className="md:m-1 h-14 md:!w-32">Link</Button>
                    )}
                </div>
            )}
            {shouldShow(hideThese?.telegram) && (
                <Input
                    label="Telegram"
                    placeholder="Enter your Telegram handle"
                    readOnly={readonly}
                    {...register('telegram')}
                />
            )}
            {shouldShow(hideThese?.website) && (
                <Input
                    label="Website"
                    placeholder="Enter your website"
                    readOnly={readonly}
                    {...register('website')}
                />
            )}
            {shouldShow(hideThese?.discord) && (
                <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-end">
                    <Input
                        label="Discord"
                        placeholder="Enter your Discord handle"
                        readOnly={readonly}
                        {...register('discord')}
                    />

                    {!readonly && (
                        <Button className="md:m-1 h-14 md:!w-32">Link</Button>
                    )}
                </div>
            )}
            {shouldShow(hideThese?.trademark) && (
                <Input
                    label="Trademark"
                    placeholder="Enter your trademark"
                    readOnly={readonly}
                    {...register('trademark')}
                />
            )}
            {shouldShow(hideThese?.other) && (
                <Textarea
                    label="Other"
                    placeholder="Enter other information"
                    className="h-52"
                    readOnly={readonly}
                    {...register('other')}
                />
            )}
            {children}
        </form>
    );
};
