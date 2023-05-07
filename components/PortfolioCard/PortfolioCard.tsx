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
        <div className="group block relative text-left p-8 pt-6 bg-white rounded-3xl shadow-lg dark:bg-label-dark dark:bg-opacity-50 dark:shadow-none dark:text-copy-white">
            <PortfolioLinks item={item} className="justify-end mb-6" />
            <h2 className="text-4xl font-display mb-5 group-hover:text-purple dark:group-hover:text-aquamarine">
                <Link
                    href={`/portfolio/${item.slug}`}
                    className="before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:cursor-pointer"
                >
                    {title}
                </Link>
            </h2>
            <ReactMarkdown
                className="prose dark:prose-invert mb-6"
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
