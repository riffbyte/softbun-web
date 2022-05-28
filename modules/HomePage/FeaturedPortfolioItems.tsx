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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
                <FeaturedPortfolioCard key={item.slug} item={item} />
            ))}
        </div>
    );
}
