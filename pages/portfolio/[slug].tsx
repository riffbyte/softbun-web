import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';

import { ISR_REVALIDATE_TIMEOUT } from '@/lib/constants';
import { PortfolioApi } from '@/lib/contentful';
import type { PortfolioItem } from '@/lib/contentful';
import { Layout } from 'components/Layout';
import { PortfolioItemPage } from 'modules/PortfolioItemPage';

interface PortfolioItemProps {
    item: PortfolioItem;
}

function Page({ item }: PortfolioItemProps) {
    return (
        <Layout>
            <PortfolioItemPage item={item} />
        </Layout>
    );
}

export async function getStaticProps({
    params,
    preview,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<PortfolioItemProps>> {
    const portfolioApi = new PortfolioApi(preview);
    const { slug } = params as { slug?: string };

    const item = slug ? await portfolioApi.getPortfolioItemBySlug(slug) : null;

    if (!item) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            item,
        },
        revalidate: ISR_REVALIDATE_TIMEOUT,
    };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const portfolioApi = new PortfolioApi();
    const paths = await portfolioApi.getPortfolioItemPaths();

    return {
        paths,
        fallback: 'blocking',
    };
}

export default Page;
