import type { Story } from '@prezly/sdk';

import { CardGrid, FeaturedStoryCard, StoryCard } from '@/components';
import { getPrezlyApi } from '@/lib/prezly/api';

async function getBlogStories(): Promise<[Story | undefined, Story[]]> {
    const api = getPrezlyApi();

    const defaultLanguage = await api.getNewsroomDefaultLanguage();
    const { stories } = await api.getStories({ localeCode: defaultLanguage.code });

    if (!stories || !stories.length) {
        return [undefined, []];
    }

    if (stories.length === 1) {
        return [stories[0], []];
    }

    return [stories[0], stories.slice(1)];
}

export async function BlogGrid() {
    const [featuredStory, otherStories] = await getBlogStories();

    if (!featuredStory) {
        return null;
    }

    return (
        <>
            <FeaturedStoryCard story={featuredStory} />
            {otherStories.length > 0 && (
                <CardGrid>
                    {otherStories.map((story) => (
                        <StoryCard key={story.uuid} story={story} />
                    ))}
                </CardGrid>
            )}
        </>
    );
}
