import Image from 'next/image';
import { ArrowRight } from 'react-feather';

import { ButtonLink, CardGrid, Contacts, PortfolioCard, Section } from '@/components';
import type { CareerItem, PortfolioItem } from '@/lib/contentful';
import photo from '@/public/photo.png';

interface Props {
    featuredPortfolioItems: PortfolioItem[];
    careerItems: CareerItem[];
}

export function HomePage({ featuredPortfolioItems, careerItems }: Props) {
    return (
        <div className="home-page">
            <Section expanded>
                <div className="flex space-x-16 mb-16">
                    <div className="self-end">
                        <p className="text-2xl text-purple dark:text-aquamarine">
                            Hello there! My name is
                        </p>
                        <h1 className="text-8xl font-display mt-4 mb-8">Oleg Semyonov</h1>
                        <h2 className="text-4xl font-bold text-copy-gray">
                            I build applications for the web
                        </h2>
                    </div>

                    <div className="w-72 h-72 main-photo">
                        <Image src={photo} alt="Portrait photo" />
                    </div>
                </div>

                <p className="text-2xl">
                    I&apos;m a full-stack web developer, making great stuff happen since 2012.
                    <br />
                    Currently building awesome tools for developers at{' '}
                    <a
                        href="https://prezly.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-purple dark:text-aquamarine hover:underline"
                    >
                        Prezly
                    </a>
                    .
                </p>
            </Section>

            <Section title="Portfolio" counter>
                <CardGrid className="mb-16">
                    {featuredPortfolioItems.map((item) => (
                        <PortfolioCard key={item.sys.id} item={item} />
                    ))}
                </CardGrid>
                <ButtonLink href="/portfolio" variation="primary">
                    See full portfolio
                    <ArrowRight className="ml-2" />
                </ButtonLink>
            </Section>

            <Section title="Carreer" counter>
                <ul className="text-xl">
                    {careerItems.map((item) => (
                        <li key={item.sys.id} className="my-4">
                            <span className="text-purple dark:text-aquamarine">
                                {item.position}
                            </span>{' '}
                            @ {item.company}. {new Date(item.startedAt).getFullYear()} -{' '}
                            {item.finishedAt ? new Date(item.finishedAt).getFullYear() : 'Present'}
                        </li>
                    ))}
                </ul>
            </Section>

            <Section title="About" prose counter>
                <p>
                    I&apos;ve been into web development for over 10 years now, creating all kinds of
                    things, from regular websites and dashboards, all the way to mobile applications
                    and open-source libraries.
                </p>

                <p>
                    During these years I&apos;ve been expanding my expertise, diving into UI/UX
                    design, starting to mentor junior developers and do some project management here
                    and there. My greatest passion became building new products from scratch,
                    utilizing modern solutions to make both the user and the developer experience
                    pleasant and smooth.
                </p>

                <p>
                    I love to write clean and modern JS/TS code with a rigid code-style, and I do it{' '}
                    <em className="font-bold">really fast</em>. Coming from the times when all we
                    had was jQuery and plain CSS, I learned to use the technologies the way our web
                    lords intended, resulting in simple, maintainable and accessible applications.
                </p>
            </Section>

            <Section title="Contacts" counter>
                <Contacts />
            </Section>
        </div>
    );
}
