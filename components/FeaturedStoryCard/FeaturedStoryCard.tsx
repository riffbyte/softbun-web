import type { Story } from '@prezly/sdk';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    story: Story;
}

export function FeaturedStoryCard({ story }: Props) {
    const { title, subtitle, slug } = story;

    const {
        thumbnail_url: coverImageUrl,
        thumbnail_width: coverImageWidth,
        thumbnail_height: coverImageHeight,
    } = story.oembed;

    return (
        <div className="group mb-10 relative text-left bg-white rounded-3xl overflow-hidden shadow-lg dark:bg-label-dark dark:bg-opacity-50 dark:shadow-none dark:text-copy-white md:grid md:grid-cols-2 md:gap-10">
            <div className="mb-4 md:mb-0">
                {coverImageUrl && (
                    <Image
                        className="block w-full aspect-featured object-cover"
                        src={coverImageUrl}
                        alt={title}
                        width={coverImageWidth}
                        height={coverImageHeight}
                        unoptimized
                        priority
                    />
                )}
            </div>
            <div className="p-6">
                <h2 className="text-4xl font-display mb-5 group-hover:text-purple dark:group-hover:text-aquamarine">
                    <Link
                        href={`/blog/${slug}`}
                        className="before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:cursor-pointer"
                    >
                        {title}
                    </Link>
                </h2>
                <h3 className="text-xl">{subtitle}</h3>
            </div>
        </div>
    );
}
