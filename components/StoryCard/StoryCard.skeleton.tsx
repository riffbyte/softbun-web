import { CardSkeleton, TextSkeleton } from '../Skeleton';

export function StoryCardSkeleton() {
    return (
        <CardSkeleton>
            <div className="mb-4 aspect-video" />
            <TextSkeleton textClassName="text-4xl" className="mb-5" />
            <TextSkeleton textClassName="text-xl" lines={3} />
        </CardSkeleton>
    );
}
