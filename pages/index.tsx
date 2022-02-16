import type { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Image from 'next/image';
import { Coffee } from 'react-feather';

import { Layout } from '@/components';
import { PortfolioApi } from '@/lib/contentful';

interface HomeProps {
    portfolioItems: any[];
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
                            <Image
                                src={item.coverImage.fields.file.url}
                                alt={item.title}
                                className="w-80"
                            />
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
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
    const portfolioItems = await api.getPortfolioItems();

    return {
        props: {
            portfolioItems,
        },
    };
}

export default Home;
