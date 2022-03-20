import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import type { PortfolioItem } from '@/lib/contentful';

interface Props {
    item: PortfolioItem;
}

export function FeaturedPortfolioCard({ item }: Props) {
    return (
        <div className="text-left">
            <div className="relative w-80">
                <Image
                    src={item.coverImage.url}
                    alt={item.title}
                    width={item.coverImage.width}
                    height={item.coverImage.height}
                />
            </div>
            <h2 className="text-xl mb-3">{item.title}</h2>
            <ReactMarkdown className="mb-3">{item.description}</ReactMarkdown>

            {item.contentfulMetadata.tags.length > 0 && (
                <div className="flex space-x-2">
                    {item.contentfulMetadata.tags.map((tag) => (
                        <div key={tag.id} className="px-2 py-1 text-sm rounded-md bg-gray-700">
                            {tag.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
