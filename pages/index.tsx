import type { GetStaticPropsContext, GetStaticPropsResult } from 'next';

import { Layout } from '@/components';
import { CareerApi, PortfolioApi } from '@/lib/contentful';
import type { CareerItem, PortfolioItem } from '@/lib/contentful';
import { HomePage } from '@/modules';

interface HomeProps {
    featuredPortfolioItems: PortfolioItem[];
    careerItems: CareerItem[];
}

function Home({ featuredPortfolioItems, careerItems }: HomeProps) {
    return (
        <Layout>
            <HomePage featuredPortfolioItems={featuredPortfolioItems} careerItems={careerItems} />
        </Layout>
    );
}

export async function getStaticProps({
    preview,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<HomeProps>> {
    const portfolioApi = new PortfolioApi(preview);
    const { items: featuredPortfolioItems } = await portfolioApi.getPortfolioItems({
        featured: true,
    });

    const careerApi = new CareerApi(preview);
    const { items: careerItems } = await careerApi.getCareerItems();

    return {
        props: {
            featuredPortfolioItems,
            careerItems,
        },
    };
}

export default Home;
