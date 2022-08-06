import { CardGrid, ContactsSection, PortfolioCard, Section } from '@/components';
import type { PortfolioItem } from '@/lib/contentful';

interface Props {
    items: PortfolioItem[];
}

export function PortfolioPage({ items }: Props) {
    return (
        <div className="portfolio-page">
            <Section title="My Portfolio">
                <CardGrid>
                    {items.map((item) => (
                        <PortfolioCard key={item.sys.id} item={item} />
                    ))}
                </CardGrid>
            </Section>
            <ContactsSection />
        </div>
    );
}
