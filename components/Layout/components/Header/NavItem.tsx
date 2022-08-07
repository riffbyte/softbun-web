import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';

interface Props {
    href: string;
}

export function NavItem({ href, children }: PropsWithChildren<Props>) {
    const { pathname } = useRouter();
    const isActive = pathname === href;

    return (
        <li>
            <Link
                href={href}
                className={classNames(
                    'font-mono text-lg p-2 hover:text-purple dark:hover:text-aquamarine',
                    {
                        'relative after:content=[""] after:absolute after:bottom-1 after:left-1 after:right-1 after:h-[2px] after:bg-purple dark:after:bg-aquamarine':
                            isActive,
                    },
                )}
            >
                {children}
            </Link>
        </li>
    );
}
