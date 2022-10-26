import classNames from 'classnames';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import { Contacts, PortfolioLinks, PortfolioTags, Section } from '@/components';
import { ISR_REVALIDATE_TIMEOUT } from '@/lib/constants';
import { PortfolioApi, renderRichText } from '@/lib/contentful';

export const revalidate = ISR_REVALIDATE_TIMEOUT;

async function getPortfolioItem(slug: string) {
    // TODO: Allow previewing (not supported by /app yet?)
    const portfolioApi = new PortfolioApi();

    return portfolioApi.getPortfolioItemBySlug(slug);
}

export default async function PortfolioItemPage({ params }: { params: { slug: string } }) {
    const item = await getPortfolioItem(params.slug);

    if (!item) {
        return notFound();
    }

    const { title, coverImage, description, body } = item;

    return (
        <div className="portfolio-item-page">
            <Section>
                <div className="lg:grid grid-cols-2 gap-8">
                    <div>
                        <h1 className="text-6xl font-bold my-8">{title}</h1>
                        <ReactMarkdown className="mb-3 prose dark:prose-invert">
                            {description}
                        </ReactMarkdown>

                        <PortfolioTags tags={item.contentfulMetadata.tags} className="mt-6" />

                        <PortfolioLinks item={item} className="mt-6" extended />
                    </div>
                    {coverImage && (
                        <div className="relative mt-6 lg:mt-0 flex justify-center items-center">
                            <Image
                                src={coverImage.url}
                                alt={title}
                                width={coverImage.width}
                                height={coverImage.height}
                                className={classNames({
                                    'rounded-lg shadow-xl dark:shadow-none':
                                        !coverImage.fileName.endsWith('.png'),
                                })}
                            />
                        </div>
                    )}
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

            <Section id="contacts" title="Contacts">
                <Contacts />
            </Section>
        </div>
    );
}

export async function generateStaticParams() {
    const portfolioApi = new PortfolioApi();
    return portfolioApi.getPortfolioItemSlugs();
}
