import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { PropsWithChildren } from 'react';

interface Props {
    href: string;
    allowPartialMatch?: boolean;
}

export function NavItem({ href, allowPartialMatch, children }: PropsWithChildren<Props>) {
    const pathname = usePathname();
    const isActive = allowPartialMatch ? pathname?.startsWith(href) : pathname === href;

    const LinkComponent = href.startsWith('#') ? 'a' : Link;

    return (
        <li>
            <LinkComponent
                href={href}
                className={classNames(
                    'p-2 font-mono text-lg hover:text-purple dark:hover:text-aquamarine',
                    {
                        'after:content=[""] relative after:absolute after:bottom-1 after:left-1 after:right-1 after:h-[2px] after:bg-purple dark:after:bg-aquamarine':
                            isActive,
                    },
                )}
            >
                {children}
            </LinkComponent>
        </li>
    );
}
