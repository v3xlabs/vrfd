import { Button, Input, Textarea } from '@ensdomains/thorin';
import { DOMAttributes, FC, ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';

type FormData = {
    legalName: string;
    twitter: string;
    telegram: string;
    website: string;
    discord: string;
    trademark: string;
    other: string;
};

export const ApplyForm: FC<{
    onSubmit: DOMAttributes<HTMLFormElement>['onSubmit'];
    register: UseFormRegister<FormData>;
    children?: ReactNode;
}> = ({ onSubmit, register, children }) => {
    return (
        <form className="flex flex-col gap-4 mt-4" onSubmit={onSubmit}>
            {/* Legal Name, Twitter, Telegram, Website, Discord, Trademark, Other */}
            <Input
                label="Legal Name"
                placeholder="Enter your legal name"
                {...register('legalName')}
            />
            <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-end">
                <Input
                    label="Twitter"
                    placeholder="Enter your Twitter handle"
                    {...register('twitter')}
                />
                <Button className="md:m-1 h-14 md:!w-32">Link</Button>
            </div>
            <Input
                label="Telegram"
                placeholder="Enter your Telegram handle"
                {...register('telegram')}
            />
            <Input
                label="Website"
                placeholder="Enter your website"
                {...register('website')}
            />
            <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-end">
                <Input
                    label="Discord"
                    placeholder="Enter your Discord handle"
                    {...register('discord')}
                />
                <Button className="md:m-1 h-14 md:!w-32">Link</Button>
            </div>
            <Input
                label="Trademark"
                placeholder="Enter your trademark"
                {...register('trademark')}
            />
            <Textarea
                label="Other"
                placeholder="Enter other information"
                className="h-52"
                {...register('other')}
            />
            {children}
        </form>
    );
};
