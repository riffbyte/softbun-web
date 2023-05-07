import { CardSkeleton, TagsSkeleton, TextSkeleton } from '../Skeleton';

export function PortfolioCardSkeleton() {
    return (
        <CardSkeleton>
            <div className="mb-6 h-10" />
            <TextSkeleton textClassName="text-4xl" className="mb-5" />
            <TextSkeleton textClassName="prose dark:prose-invert" className="mb-6" lines={3} />

            <TagsSkeleton className="mt-4" count={5} />
        </CardSkeleton>
    );
}
