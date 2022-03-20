import type { GetStaticPropsContext, GetStaticPropsResult } from 'next';

import { Layout } from '@/components';
import { CareerApi, PortfolioApi } from '@/lib/contentful';
import type { CareerItem, PortfolioItem } from '@/lib/contentful';
import { HomePage } from '@/modules';

interface HomeProps {
    featuredPortfolioItems: PortfolioItem[];
    otherPortfolioItems: PortfolioItem[];
    careerItems: CareerItem[];
}

function Home({ featuredPortfolioItems, otherPortfolioItems, careerItems }: HomeProps) {
    return (
        <Layout>
            <HomePage
                featuredPortfolioItems={featuredPortfolioItems}
                otherPortfolioItems={otherPortfolioItems}
                careerItems={careerItems}
            />
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
    const { items: otherPortfolioItems } = await portfolioApi.getPortfolioItems();

    const careerApi = new CareerApi(preview);
    const { items: careerItems } = await careerApi.getCareerItems();

    return {
        props: {
            featuredPortfolioItems,
            otherPortfolioItems,
            careerItems,
        },
    };
}

export default Home;
