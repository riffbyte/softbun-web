import { Section } from '@/components';
import type { PortfolioItem } from '@/lib/contentful';

import { FeaturedPortfolioItems } from './FeaturedPortfolioItems';

interface Props {
    featuredPortfolioItems: PortfolioItem[];
    otherPortfolioItems: PortfolioItem[];
}

export function HomePage({ featuredPortfolioItems, otherPortfolioItems }: Props) {
    return (
        <>
            <Section expanded>
                <p className="text-aquamarine">Hello there! My name is</p>
                <h1 className="text-6xl font-bold text-white my-8">Oleg Semyonov</h1>
                <h2 className="text-4xl font-bold text-white opacity-70 mb-8">
                    I build applications for the web
                </h2>

                <p>
                    I&apos;m a full-stack software engineer developing great stuff for web and
                    mobile.
                    <br />
                    Currently building awesome tools for developers at{' '}
                    <a
                        href="https://prezly.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-aquamarine hover:underline"
                    >
                        Prezly
                    </a>
                    .
                </p>
            </Section>
            <Section title="A little about me">
                <p>Hey! My name is Oleg. TODO: I will add more info here.</p>

                <p>TODO: A couple sentences about my work experience</p>

                <p>TODO: A little bit about my tech stack</p>
            </Section>
            <Section title="My working career">
                <ul>
                    <li>Software Engineer @ Prezly. 2021 - Present</li>
                    <li>Senior Engineer @ Anyway Labs. 2017 - 2021</li>
                    <li>Freelance developer @ Agente Studio. 2016 - 2020</li>
                </ul>
            </Section>
            <Section title="Some stuff I made recently">
                <FeaturedPortfolioItems items={featuredPortfolioItems} />
            </Section>
            <Section title="My other projects">
                <FeaturedPortfolioItems items={otherPortfolioItems} />
            </Section>
        </>
    );
}
