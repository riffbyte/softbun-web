import { CardSkeleton, TextSkeleton } from '../Skeleton';

export function StoryCardSkeleton() {
    return (
        <CardSkeleton>
            <div className="aspect-video mb-4" />
            <TextSkeleton textClassName="text-4xl" className="mb-5" />
            <TextSkeleton textClassName="text-xl" lines={3} />
        </CardSkeleton>
    );
}
