import { Suspense } from 'react';

import { Contacts, Section } from '@/components';
import { ISR_REVALIDATE_TIMEOUT } from '@/lib/constants';

import { PortfolioGrid } from '../PortfolioGrid';
import { PortfolioGridSkeleton } from '../PortfolioGrid.skeleton';

export const revalidate = ISR_REVALIDATE_TIMEOUT;

export default function PortfolioPage() {
    return (
        <div className="portfolio-page">
            <Section title="Portfolio">
                <Suspense fallback={<PortfolioGridSkeleton className="mb-16" count={10} />}>
                    {/* @ts-ignore */}
                    <PortfolioGrid />
                </Suspense>
            </Section>
            <Section id="contacts" title="Contacts">
                <Contacts />
            </Section>
        </div>
    );
}
