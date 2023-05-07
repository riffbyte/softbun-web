import classNames from 'classnames';

import type { PortfolioItem } from '@/lib/contentful';

interface Props {
    tags: PortfolioItem['contentfulMetadata']['tags'];
    className?: string;
}

export function PortfolioTags({ tags, className }: Props) {
    if (!tags.length) {
        return null;
    }

    return (
        <div className={classNames('flex flex-wrap gap-2', className)}>
            {tags.map((tag) => (
                <div
                    key={tag.id}
                    className={`
                        whitespace-nowrap rounded-full bg-label-light px-2 py-1 
                        font-mono text-sm dark:bg-label-dark
                    `}
                >
                    {tag.name}
                </div>
            ))}
        </div>
    );
}
