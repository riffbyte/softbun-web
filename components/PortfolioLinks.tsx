import classNames from 'classnames';
import { ExternalLink, GitHub, Package } from 'react-feather';

import type { PortfolioItem } from '@/lib/contentful';

interface Props {
    item: PortfolioItem;
    className?: string;
    extended?: boolean;
}

export function PortfolioLinks({ item, className, extended }: Props) {
    const { gitHubLink, npmLink, externalLink } = item;

    const linkClassName = classNames(
        'relative z-10 h-10 p-1 hover:text-purple dark:hover:text-aquamarine',
        {
            'block w-10': !extended,
            'flex items-center space-x-2 flex-shrink-0': extended,
        },
    );

    const labelClassName = classNames({ 'sr-only': !extended, 'font-mono font-medium': extended });

    const iconClassName = classNames({ 'w-8 h-8': !extended, 'w-6 h-6': extended });

    return (
        <div className={classNames('flex h-10 flex-wrap gap-3', className)}>
            {gitHubLink && (
                <a
                    href={gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                >
                    <GitHub className={iconClassName} />
                    <span className={labelClassName}>GitHub repository</span>
                </a>
            )}
            {npmLink && (
                <a
                    href={npmLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                >
                    <Package className={iconClassName} />
                    <span className={labelClassName}>NPM package</span>
                </a>
            )}
            {externalLink && (
                <a
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                >
                    <ExternalLink className={iconClassName} />
                    <span className={labelClassName}>Website</span>
                </a>
            )}
        </div>
    );
}
