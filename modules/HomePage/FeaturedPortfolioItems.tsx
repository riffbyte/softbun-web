import type { PortfolioItem } from '@/lib/contentful';

import { FeaturedPortfolioCard } from './FeaturedPortfolioCard';

interface Props {
    items: PortfolioItem[];
}

export function FeaturedPortfolioItems({ items }: Props) {
    if (!items.length) {
        return null;
    }

    return (
        <div>
            {items.map((item) => (
                <FeaturedPortfolioCard key={item.slug} item={item} />
            ))}
        </div>
    );
}
