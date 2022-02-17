import type { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Image from 'next/image';
import { Coffee } from 'react-feather';
import ReactMarkdown from 'react-markdown';

import { Layout } from '@/components';
import { PortfolioApi } from '@/lib/contentful';
import type { PortfolioItem } from '@/lib/contentful';

interface HomeProps {
    portfolioItems: PortfolioItem[];
}

function Home({ portfolioItems }: HomeProps) {
    return (
        <Layout>
            <div className="text-center text-gray-900 dark:text-white">
                <Coffee
                    className="mx-auto mb-4 text-aquamarine-darker dark:text-aquamarine animate-pulse"
                    size={80}
                    strokeWidth="1px"
                />
                <h1 className="text-3xl font-bold">Soft Bun Dev</h1>
                <h2 className="text-xl mt-4">
                    Some cool stuff brewing
                    <span className="animated-ellipsis" />
                </h2>

                <div>
                    {portfolioItems.map((item) => (
                        <div key={item.slug} className="text-left">
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
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps({
    preview,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<HomeProps>> {
    const api = new PortfolioApi(preview);
    const { items } = await api.getPortfolioItems();

    return {
        props: {
            portfolioItems: items,
        },
    };
}

export default Home;
