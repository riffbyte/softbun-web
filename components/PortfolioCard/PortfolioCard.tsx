// import Link from 'next/link';
import { ExternalLink, GitHub, Package } from 'react-feather';
import ReactMarkdown from 'react-markdown';

import type { PortfolioItem } from '@/lib/contentful';

interface Props {
    item: PortfolioItem;
}

export function PortfolioCard({ item }: Props) {
    const { title, description, gitHubLink, npmLink, externalLink } = item;

    return (
        // <Link href={`/portfolio/${item.slug}`} className="block text-left">
        <div className="block text-left p-8 pt-6 bg-white rounded-3xl shadow-lg dark:bg-label-dark dark:bg-opacity-50 dark:shadow-none dark:text-copy-white">
            <div className="h-10 flex justify-end space-x-3 mb-6">
                {gitHubLink && (
                    <a
                        href={gitHubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-10 h-10 p-1 hover:text-purple dark:hover:text-aquamarine"
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
                        className="block w-10 h-10 p-1 hover:text-purple dark:hover:text-aquamarine"
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
                        className="block w-10 h-10 p-1 hover:text-purple dark:hover:text-aquamarine"
                    >
                        <ExternalLink className="w-8 h-8" />
                        <span className="sr-only">External link</span>
                    </a>
                )}
            </div>
            <h2 className="text-4xl font-display mb-5">{title}</h2>
            <ReactMarkdown className="prose dark:prose-invert mb-6" linkTarget="_blank">
                {description}
            </ReactMarkdown>

            {item.contentfulMetadata.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap">
                    {item.contentfulMetadata.tags.map((tag) => (
                        <div
                            key={tag.id}
                            className={`
                                px-2 py-1 mr-2 mb-2 text-sm font-mono rounded-full 
                                bg-label-light dark:bg-label-dark whitespace-nowrap
                            `}
                        >
                            {tag.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
        // </Link>
    );
}
