import { FC, PropsWithChildren } from 'react';

export const Link: FC<{ href: string } & PropsWithChildren> = ({
    href,
    children,
}) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-blue hover:underline"
    >
        {children}
    </a>
);
