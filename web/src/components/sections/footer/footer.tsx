import { FC } from 'react';
import { GitHub, Twitter } from 'react-feather';

export const Footer: FC = () => {
    return (
        <div className="w-full flex bg-white justify-center items-center p-6 mt-2 border-2 border-solid border-t-neutral-300 border-r-0 border-l-0 border-b-0">
            <div className="flex flex-col sm:flex-row gap-2 justify-between items-center w-full max-w-[800px]">
                <div className="flex gap-6">
                    <a
                        target={'_blank'}
                        href={'https://github.com/v3xlabs/vrfd'}
                        rel="noreferrer"
                    >
                        <GitHub size={'28px'} />
                    </a>
                    <a
                        target={'_blank'}
                        href={'https://twitter.com/v3xlabs'}
                        rel="noreferrer"
                    >
                        <Twitter size={'28px'} />
                    </a>
                </div>
                <span className={'text-base'}>
                    &copy; Copyright V3X Labs 2022. All Rights Reserved.
                </span>
            </div>
        </div>
    );
};
