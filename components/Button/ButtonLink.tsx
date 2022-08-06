import classNames from 'classnames';
import Link from 'next/link';
import type { ComponentProps } from 'react';

export function ButtonLink(props: ComponentProps<typeof Link>) {
    const { href, className, children, ...rest } = props;

    return (
        <Link
            href={href}
            className={classNames(
                `
                inline-flex items-center justify-center px-10 py-3 
                border border-transparent rounded-md shadow-sm 
                text-lg font-medium text-white 
                bg-indigo-500 
                hover:bg-indigo-600 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                `,
                className,
            )}
            {...rest}
        >
            {children}
        </Link>
    );
}
