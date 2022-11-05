import { cx } from '@utils/cx';
import { FC } from 'react';
import { GitHub, Twitter } from 'react-feather';

export const Footer: FC<{ noTopMargin?: boolean }> = (properties) => {
    return (
        <footer
            className={cx(
                'w-full flex justify-center items-center bg-white p-6',
                'border-2 border-solid border-t-neutral-300 border-r-0 border-l-0 border-b-0',
                !properties.noTopMargin && 'mt-44'
            )}
        >
            <div className="flex flex-col sm:flex-row gap-2 justify-between items-center w-full max-w-[800px]">
                <div className="flex gap-6 text-grey2">
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
                <span className={'text-sm text-grey2'}>
                    &copy; Copyright V3X Labs 2022. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};
