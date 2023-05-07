import { times } from 'lodash-es';

import { CardGrid, FeaturedStoryCardSkeleton, StoryCardSkeleton } from '@/components';

interface Props {
    count?: number;
}

export function BlogGridSkeleton({ count = 4 }: Props) {
    return (
        <>
            <FeaturedStoryCardSkeleton />
            <CardGrid>
                {times(count).map((card) => (
                    <StoryCardSkeleton key={card} />
                ))}
            </CardGrid>
        </>
    );
}
