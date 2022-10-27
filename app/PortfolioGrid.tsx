import { CardGrid, PortfolioCard } from '@/components';
import { PortfolioApi } from '@/lib/contentful';

async function getPortfolioItems(featured?: boolean) {
    const portfolioApi = new PortfolioApi();
    const { items: featuredPortfolioItems } = await portfolioApi.getPortfolioItems({
        featured,
    });

    return featuredPortfolioItems;
}

interface Props {
    className?: string;
    featured?: boolean;
}

export async function PortfolioGrid({ className, featured }: Props) {
    const items = await getPortfolioItems(featured);

    return (
        <CardGrid className={className}>
            {items.map((item) => (
                <PortfolioCard key={item.sys.id} item={item} />
            ))}
        </CardGrid>
    );
}
