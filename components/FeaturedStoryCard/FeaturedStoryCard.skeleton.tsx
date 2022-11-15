import { CardSkeleton, TextSkeleton } from '@/components';

export function FeaturedStoryCardSkeleton() {
    return (
        <CardSkeleton className="mb-10 md:grid md:grid-cols-2">
            <div className="mb-4 md:mb-0" />
            <div className="p-6">
                <TextSkeleton textClassName="text-4xl" className="mb-5" />
                <TextSkeleton textClassName="text-xl" lines={3} />
            </div>
        </CardSkeleton>
    );
}
