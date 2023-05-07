import { Suspense } from 'react';

import { BlogGrid } from '@/app/components/BlogGrid';
import { BlogGridSkeleton } from '@/app/components/BlogGrid.skeleton';
import { Contacts, Section } from '@/components';

export const revalidate = 60;

export default function BlogIndexPage() {
    return (
        <div className="blog-page">
            <Section>
                <Suspense fallback={<BlogGridSkeleton />}>
                    {/* @ts-expect-error */}
                    <BlogGrid />
                </Suspense>
            </Section>
            <Section id="contacts" title="Contacts">
                <Contacts />
            </Section>
        </div>
    );
}
