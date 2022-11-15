import { Suspense } from 'react';

import { BlogGrid } from '@/app/components/BlogGrid';
import { BlogGridSkeleton } from '@/app/components/BlogGrid.skeleton';
import { Contacts, Section } from '@/components';
import { ISR_REVALIDATE_TIMEOUT } from '@/lib/constants';

export const revalidate = ISR_REVALIDATE_TIMEOUT;

export default function BlogIndexPage() {
    return (
        <div className="blog-page">
            <Section>
                <Suspense fallback={<BlogGridSkeleton />}>
                    {/* @ts-ignore */}
                    <BlogGrid />
                </Suspense>
            </Section>
            <Section id="contacts" title="Contacts">
                <Contacts />
            </Section>
        </div>
    );
}
