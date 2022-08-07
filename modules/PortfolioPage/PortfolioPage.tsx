import { CardGrid, Contacts, PortfolioCard, Section } from '@/components';
import type { PortfolioItem } from '@/lib/contentful';

interface Props {
    items: PortfolioItem[];
}

export function PortfolioPage({ items }: Props) {
    return (
        <div className="portfolio-page">
            <Section title="Portfolio">
                <CardGrid>
                    {items.map((item) => (
                        <PortfolioCard key={item.sys.id} item={item} />
                    ))}
                </CardGrid>
            </Section>
            <Section title="Contacts">
                <Contacts />
            </Section>
        </div>
    );
}
