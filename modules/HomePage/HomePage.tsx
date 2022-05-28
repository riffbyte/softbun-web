import { Section } from '@/components';
import type { CareerItem, PortfolioItem } from '@/lib/contentful';

import { FeaturedPortfolioItems } from './FeaturedPortfolioItems';

interface Props {
    featuredPortfolioItems: PortfolioItem[];
    otherPortfolioItems: PortfolioItem[];
    careerItems: CareerItem[];
}

export function HomePage({ featuredPortfolioItems, otherPortfolioItems, careerItems }: Props) {
    return (
        <>
            <Section expanded>
                <p className="text-aquamarine">Hello there! My name is</p>
                <h1 className="text-6xl font-bold text-white my-8">Oleg Semyonov</h1>
                <h2 className="text-4xl font-bold text-white opacity-70 mb-8">
                    I build applications for the web
                </h2>

                <p>
                    I&apos;m a full-stack web developer, making great stuff happen since 2012.
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
            <Section title="A little about me" prose>
                <p>
                    I've been sailing the web development seas ever since my student years more than
                    10 years ago. I've been creating everything from regular websites and
                    dashboards, all the way to mobile applications and open-source libraries.
                </p>

                <p>
                    The main characteristic of my work one could give for all these years has been
                    simple:
                </p>

                <blockquote className="text-2xl font-bold not-italic my-6 border-aquamarine">
                    Get 💩 done. Fast.
                </blockquote>

                <p>
                    I write clean and modern JS/TS code with a rigid code-style (man do I love
                    ESLint!), and I do it <em className="font-bold">really fast</em>. Coming from
                    the times when all we had was jQuery and plain CSS, I prefer to use the
                    technologies as our web lords have intended, resulting in simple, maintainable
                    and accessible applications.
                </p>
            </Section>
            <Section title="My working career">
                <ul className="text-xl">
                    {careerItems.map((item) => (
                        <li key={item.sys.id} className="my-4">
                            <span className="text-aquamarine">{item.position}</span> @{' '}
                            {item.company}. {new Date(item.startedAt).getFullYear()} -{' '}
                            {item.finishedAt ? new Date(item.finishedAt).getFullYear() : 'Present'}
                        </li>
                    ))}
                </ul>
            </Section>
            <Section title="Some stuff I made recently">
                <FeaturedPortfolioItems items={featuredPortfolioItems} />
            </Section>
            {/* <Section title="My other projects">
                <FeaturedPortfolioItems items={otherPortfolioItems} />
            </Section> */}
        </>
    );
}
