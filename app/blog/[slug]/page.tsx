import { getPrezlyApi } from '@prezly/theme-kit-core/server';
import Image from '@prezly/uploadcare-image';
import { notFound } from 'next/navigation';

import { BlogPostContent } from '@/app/components/BlogPostContent';
import { Contacts, Section } from '@/components';

export const revalidate = 60;

async function getStory(slug: string) {
    const api = getPrezlyApi();
    const story = await api.getStoryBySlug(slug);

    return story;
}

interface Params {
    slug: string;
}

export default async function StoryPage({ params }: { params?: Partial<Params> }) {
    const story = params?.slug ? await getStory(params.slug) : null;

    if (!story) {
        notFound();
    }

    const { title, subtitle, header_image } = story;
    const headerImage = header_image ? JSON.parse(header_image) : null;

    return (
        <article className="story-page">
            <Section>
                {headerImage && (
                    <Image
                        alt=""
                        containerClassName="relative z-1"
                        className="rounded-lg shadow-xl dark:shadow-none"
                        objectFit="cover"
                        layout="fill"
                        imageDetails={headerImage}
                    />
                )}
                <div className="bg-white py-8 dark:bg-onyx md:mx-auto md:max-w-3xl md:px-8 lg:max-w-4xl lg:px-16">
                    <h1 className="mb-8 text-6xl font-bold">{title}</h1>
                    {subtitle && <h2 className="text-3xl font-bold">{subtitle}</h2>}

                    <div className="prose mt-8 max-w-none dark:prose-invert">
                        <BlogPostContent story={story} />
                    </div>
                </div>
            </Section>

            <Section id="contacts" title="Contacts">
                <Contacts />
            </Section>
        </article>
    );
}

export async function generateStaticParams(): Promise<Params[]> {
    const api = getPrezlyApi();
    const stories = await api.getAllStories();
    return stories.map(({ slug }) => ({ slug }));
}
