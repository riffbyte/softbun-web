import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import type { PortfolioItem } from '@/lib/contentful';

import { PortfolioLinks } from '../PortfolioLinks';
import { PortfolioTags } from '../PortfolioTags';

interface Props {
    item: PortfolioItem;
}

export function PortfolioCard({ item }: Props) {
    const { title, description } = item;

    return (
        <div className="group relative block rounded-3xl bg-white p-8 pt-6 text-left shadow-lg dark:bg-label-dark dark:bg-opacity-50 dark:text-copy-white dark:shadow-none">
            <PortfolioLinks item={item} className="mb-6 justify-end" />
            <h2 className="mb-5 font-display text-4xl group-hover:text-purple dark:group-hover:text-aquamarine">
                <Link
                    href={`/portfolio/${item.slug}`}
                    className="before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:cursor-pointer before:content-['']"
                >
                    {title}
                </Link>
            </h2>
            <ReactMarkdown
                className="prose mb-6 dark:prose-invert"
                linkTarget="_blank"
                components={{
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    a: (props) => <a {...props} className="relative z-10" />,
                }}
            >
                {description}
            </ReactMarkdown>

            <PortfolioTags className="mt-4" tags={item.contentfulMetadata.tags} />
        </div>
    );
}
