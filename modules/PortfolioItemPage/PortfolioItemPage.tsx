import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import { PortfolioLinks, PortfolioTags, Section } from '@/components';
import type { PortfolioItem } from '@/lib/contentful';
import { renderRichText } from '@/lib/contentful';

interface Props {
    item: PortfolioItem;
}

export function PortfolioItemPage({ item }: Props) {
    const { title, coverImage, description, body } = item;
    return (
        <>
            <Section>
                <div className="lg:grid grid-cols-2 gap-8">
                    {coverImage && (
                        <div className="relative">
                            <Image
                                src={coverImage.url}
                                alt={title}
                                width={coverImage.width}
                                height={coverImage.height}
                            />
                        </div>
                    )}
                    <div>
                        <h1 className="text-6xl font-bold my-8">{title}</h1>
                        <ReactMarkdown className="mb-3 prose dark:prose-invert">
                            {description}
                        </ReactMarkdown>

                        <PortfolioTags tags={item.contentfulMetadata.tags} className="mt-6" />

                        <PortfolioLinks item={item} className="mt-6" extended />
                    </div>
                </div>
            </Section>

            <div className="max-w-4xl">
                <Section prose>
                    {body && renderRichText(body)}
                    {!body && (
                        <p className="italic">
                            One day this page will receive a proper story, I promise...
                        </p>
                    )}
                </Section>
            </div>
        </>
    );
}
