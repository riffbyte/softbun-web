import type { GetStaticPropsContext, GetStaticPropsResult } from 'next';

import { Layout } from '@/components';
import { PortfolioApi } from '@/lib/contentful';
import type { PortfolioItem } from '@/lib/contentful';
import { HomePage } from '@/modules';

interface HomeProps {
    featuredPortfolioItems: PortfolioItem[];
    otherPortfolioItems: PortfolioItem[];
}

function Home({ featuredPortfolioItems, otherPortfolioItems }: HomeProps) {
    return (
        <Layout>
            <HomePage
                featuredPortfolioItems={featuredPortfolioItems}
                otherPortfolioItems={otherPortfolioItems}
            />
        </Layout>
    );
}

export async function getStaticProps({
    preview,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<HomeProps>> {
    const api = new PortfolioApi(preview);
    const { items: featuredPortfolioItems } = await api.getPortfolioItems({ featured: true });
    const { items: otherPortfolioItems } = await api.getPortfolioItems();

    return {
        props: {
            featuredPortfolioItems,
            otherPortfolioItems,
        },
    };
}

export default Home;
