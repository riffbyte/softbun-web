import type { GetStaticPropsContext, GetStaticPropsResult } from 'next';

import { Layout } from '@/components';
import { PortfolioApi } from '@/lib/contentful';
import type { PortfolioItem } from '@/lib/contentful';
import { PortfolioPage } from '@/modules';

interface HomeProps {
    items: PortfolioItem[];
}

function Home({ items }: HomeProps) {
    return (
        <Layout>
            <PortfolioPage items={items} />
        </Layout>
    );
}

export async function getStaticProps({
    preview,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<HomeProps>> {
    const portfolioApi = new PortfolioApi(preview);
    const { items } = await portfolioApi.getPortfolioItems();

    return {
        props: {
            items,
        },
    };
}

export default Home;
