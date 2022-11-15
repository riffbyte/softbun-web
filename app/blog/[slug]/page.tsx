import Image from '@prezly/uploadcare-image';
import { notFound } from 'next/navigation';

import { Contacts, Section } from '@/components';
import { ISR_REVALIDATE_TIMEOUT } from '@/lib/constants';
import { getPrezlyApi } from '@/lib/prezly/api';

export const revalidate = ISR_REVALIDATE_TIMEOUT;

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
        return null;
    }

    const { title, subtitle, content, header_image } = story;
    const headerImage = header_image ? JSON.parse(header_image) : null;

    return (
        <article className="story-page">
            <Section>
                {headerImage && (
                    <Image
                        alt=""
                        className="mb-10 rounded-lg shadow-xl dark:shadow-none"
                        objectFit="cover"
                        layout="fill"
                        imageDetails={headerImage}
                    />
                )}
                <h1 className="text-6xl font-bold my-8">{title}</h1>
                <h2 className="text-3xl font-bold">{subtitle}</h2>
            </Section>

            <div className="max-w-4xl">
                <Section prose>{content}</Section>
            </div>

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
