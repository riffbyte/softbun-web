import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import type { PortfolioItem } from '@/lib/contentful';
import { renderRichText } from '@/lib/contentful';
import { Section } from 'components/Layout';

interface Props {
    item: PortfolioItem;
}

export function PortfolioItemPage({ item }: Props) {
    const { title, coverImage, description, body } = item;
    return (
        <>
            <Section>
                <div className="lg:grid grid-cols-2 gap-8">
                    <div className="relative">
                        <Image
                            src={coverImage.url}
                            alt={title}
                            width={coverImage.width}
                            height={coverImage.height}
                        />
                    </div>
                    <div>
                        <h1 className="text-6xl font-bold text-white my-8">{title}</h1>
                        <ReactMarkdown className="mb-3">{description}</ReactMarkdown>

                        {item.contentfulMetadata.tags.length > 0 && (
                            <div className="flex space-x-2">
                                {item.contentfulMetadata.tags.map((tag) => (
                                    <div
                                        key={tag.id}
                                        className="px-2 py-1 text-sm rounded-md bg-gray-700"
                                    >
                                        {tag.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </Section>

            <div className="max-w-4xl mx-auto">
                <Section>{renderRichText(body)}</Section>
            </div>
        </>
    );
}
