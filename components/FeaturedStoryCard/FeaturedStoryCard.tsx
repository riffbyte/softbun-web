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
        <div className="group relative mb-10 overflow-hidden rounded-3xl bg-white text-left shadow-lg dark:bg-label-dark dark:bg-opacity-50 dark:text-copy-white dark:shadow-none md:grid md:grid-cols-2 md:gap-10">
            <div className="mb-4 md:mb-0">
                {coverImageUrl && (
                    <Image
                        className="block aspect-featured w-full object-cover"
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
                <h2 className="mb-5 font-display text-4xl group-hover:text-purple dark:group-hover:text-aquamarine">
                    <Link
                        href={`/blog/${slug}`}
                        className="before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:cursor-pointer before:content-['']"
                    >
                        {title}
                    </Link>
                </h2>
                <h3 className="text-xl">{subtitle}</h3>
            </div>
        </div>
    );
}
