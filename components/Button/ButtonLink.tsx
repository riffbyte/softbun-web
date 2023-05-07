import Link from 'next/link';
import type { ComponentProps } from 'react';

import { getButtonClassName } from './lib';
import type { ButtonProps } from './types';

export function ButtonLink(props: ComponentProps<typeof Link> & ButtonProps) {
    const { href, className, variation, children, ...rest } = props;

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Link href={href} className={getButtonClassName(variation, className)} {...rest}>
            {children}
        </Link>
    );
}
