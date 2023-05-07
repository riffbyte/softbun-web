import classNames from 'classnames';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import { Contacts, PortfolioLinks, PortfolioTags, Section } from '@/components';
import { PortfolioApi, renderRichText } from '@/lib/contentful';

export const revalidate = 60;

async function getPortfolioItem(slug: string) {
    // TODO: Allow previewing. See https://nextjs.org/docs/app/building-your-application/configuring/draft-mode
    const portfolioApi = new PortfolioApi();

    return portfolioApi.getPortfolioItemBySlug(slug);
}

interface Params {
    slug: string;
}

export default async function PortfolioItemPage({ params }: { params?: Partial<Params> }) {
    const item = params?.slug ? await getPortfolioItem(params.slug) : null;

    if (!item) {
        notFound();
        return null;
    }

    const { title, coverImage, description, body } = item;

    return (
        <div className="portfolio-item-page">
            <Section>
                <div className="grid-cols-2 gap-8 lg:grid">
                    <div>
                        <h1 className="my-8 text-6xl font-bold">{title}</h1>
                        <ReactMarkdown className="prose mb-3 dark:prose-invert">
                            {description}
                        </ReactMarkdown>

                        <PortfolioTags tags={item.contentfulMetadata.tags} className="mt-6" />

                        <PortfolioLinks item={item} className="mt-6" extended />
                    </div>
                    {coverImage && (
                        <div className="relative mt-6 flex items-center justify-center lg:mt-0">
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

export async function generateStaticParams(): Promise<Params[]> {
    const portfolioApi = new PortfolioApi();
    return portfolioApi.getPortfolioItemSlugs();
}
