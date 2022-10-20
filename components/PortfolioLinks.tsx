import classNames from 'classnames';
import { ExternalLink, GitHub, Package } from 'react-feather';

import type { PortfolioItem } from '@/lib/contentful';

interface Props {
    item: PortfolioItem;
    className?: string;
}

export function PortfolioLinks({ item, className }: Props) {
    const { gitHubLink, npmLink, externalLink } = item;

    return (
        <div className={classNames('h-10 flex space-x-3', className)}>
            {gitHubLink && (
                <a
                    href={gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative z-10 w-10 h-10 p-1 hover:text-purple dark:hover:text-aquamarine"
                >
                    <GitHub className="w-8 h-8" />
                    <span className="sr-only">GitHub repository</span>
                </a>
            )}
            {npmLink && (
                <a
                    href={npmLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative z-10 w-10 h-10 p-1 hover:text-purple dark:hover:text-aquamarine"
                >
                    <Package className="w-8 h-8" />
                    <span className="sr-only">NPM package</span>
                </a>
            )}
            {externalLink && (
                <a
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative z-10 w-10 h-10 p-1 hover:text-purple dark:hover:text-aquamarine"
                >
                    <ExternalLink className="w-8 h-8" />
                    <span className="sr-only">External link</span>
                </a>
            )}
        </div>
    );
}
