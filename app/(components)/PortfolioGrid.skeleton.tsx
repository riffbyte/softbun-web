import { times } from 'lodash-es';

import { CardGrid, PortfolioCardSkeleton } from '@/components';

interface Props {
    className?: string;
    count?: number;
}

export function PortfolioGridSkeleton({ className, count = 4 }: Props) {
    return (
        <CardGrid className={className}>
            {times(count).map((card) => (
                <PortfolioCardSkeleton key={card} />
            ))}
        </CardGrid>
    );
}
