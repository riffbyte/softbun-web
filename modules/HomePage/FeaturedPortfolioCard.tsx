import Image from 'next/image';
// import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import type { PortfolioItem } from '@/lib/contentful';

interface Props {
    item: PortfolioItem;
}

export function FeaturedPortfolioCard({ item }: Props) {
    return (
        // <Link href={`/portfolio/${item.slug}`} passHref>
        // <a className="block text-left">
        <div className="block text-left">
            {item.coverImage && (
                <div className="relative w-80">
                    <Image
                        src={item.coverImage.url}
                        alt={item.title}
                        width={item.coverImage.width}
                        height={item.coverImage.height}
                    />
                </div>
            )}
            <h2 className="text-xl text-white font-bold mb-3">{item.title}</h2>
            <ReactMarkdown className="prose" linkTarget="_blank">
                {item.description}
            </ReactMarkdown>

            {item.contentfulMetadata.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap">
                    {item.contentfulMetadata.tags.map((tag) => (
                        <div
                            key={tag.id}
                            className="px-2 py-1 mr-2 mb-2 text-sm rounded-md bg-gray-700 whitespace-nowrap"
                        >
                            {tag.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
        // </a>
        // </Link>
    );
}
