'use client';

import { Renderer } from '@prezly/content-renderer-react-js';
import type { ExtendedStory } from '@prezly/sdk';
import { useMemo } from 'react';

// TODO: Update content renderer to export minimal styles (only what is required for lightbox, etc)
import './content-renderer.reduced.css';

interface Props {
    story: ExtendedStory;
}

export function BlogPostContent({ story }: Props) {
    const content = useMemo(() => JSON.parse(story.content), [story.content]);

    return <Renderer nodes={content} defaultComponents />;
}
