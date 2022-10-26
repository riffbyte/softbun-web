import { CardGrid, Contacts, PortfolioCard, Section } from '@/components';
import { ISR_REVALIDATE_TIMEOUT } from '@/lib/constants';
import { PortfolioApi } from '@/lib/contentful';

export const revalidate = ISR_REVALIDATE_TIMEOUT;

async function getPortfolioItems() {
    // TODO: Allow previewing (not supported by /app yet?)
    const portfolioApi = new PortfolioApi();
    const { items } = await portfolioApi.getPortfolioItems();
    return items;
}

export default async function PortfolioPage() {
    const items = await getPortfolioItems();

    return (
        <div className="portfolio-page">
            <Section title="Portfolio">
                <CardGrid>
                    {items.map((item) => (
                        <PortfolioCard key={item.sys.id} item={item} />
                    ))}
                </CardGrid>
            </Section>
            <Section id="contacts" title="Contacts">
                <Contacts />
            </Section>
        </div>
    );
}
