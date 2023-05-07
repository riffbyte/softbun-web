import Image from 'next/image';
import { Suspense } from 'react';
import { ArrowRight } from 'react-feather';

import { CarreerList } from '@/app/components/CarreerList';
import { CarreerListSkeleton } from '@/app/components/CarreerList.skeleton';
import { PortfolioGrid } from '@/app/components/PortfolioGrid';
import { PortfolioGridSkeleton } from '@/app/components/PortfolioGrid.skeleton';
import { ButtonLink, Contacts, Section } from '@/components';
import photo from '@/public/photo.png';

export const revalidate = 60;

// TODO: Allow previewing. See https://nextjs.org/docs/app/building-your-application/configuring/draft-mode

export default function HomePage() {
    return (
        <div className="home-page">
            <Section expanded>
                <div className="mb-16 md:flex md:space-x-16">
                    <div className="md:self-end">
                        <p className="text-2xl text-purple dark:text-aquamarine">
                            Hello there! My name is
                        </p>
                        <h1 className="mb-8 mt-4 font-display text-6xl md:text-8xl">
                            Oleg Semyonov
                        </h1>
                        <h2 className="text-3xl font-bold text-copy-gray md:text-4xl">
                            I build applications for the web
                        </h2>
                    </div>

                    <div className="main-photo hidden h-72 w-72 md:block">
                        <Image src={photo} alt="Portrait photo" priority />
                    </div>
                </div>

                <p className="text-xl md:text-2xl">
                    I&apos;m a full-stack web developer, making great stuff happen since 2012.
                    <br />
                    Currently building awesome tools for developers at{' '}
                    <a
                        href="https://prezly.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-purple hover:underline dark:text-aquamarine"
                    >
                        Prezly
                    </a>
                    .
                </p>
            </Section>

            <Section title="Portfolio" counter>
                <Suspense fallback={<PortfolioGridSkeleton className="mb-16" />}>
                    {/* @ts-expect-error */}
                    <PortfolioGrid className="mb-16" featured />
                </Suspense>
                <ButtonLink href="/portfolio" variation="primary">
                    See full portfolio
                    <ArrowRight className="ml-2" />
                </ButtonLink>
            </Section>

            <Section title="Career" counter>
                <Suspense fallback={<CarreerListSkeleton />}>
                    {/* @ts-expect-error */}
                    <CarreerList />
                </Suspense>
            </Section>

            <Section title="About" prose counter>
                <p>
                    I&apos;ve been into web development for about 10 years now, creating all kinds
                    of things, from regular websites and dashboards, all the way to mobile
                    applications and open-source libraries.
                </p>

                <p>
                    During these years I&apos;ve been expanding my expertise, diving into UI/UX
                    design, starting to mentor junior developers and do some project management here
                    and there. My greatest passion became building new products from scratch,
                    utilizing modern solutions to make both the user and the developer experience
                    pleasant and smooth.
                </p>
            </Section>

            <Section id="contacts" title="Contacts" counter>
                <Contacts />
            </Section>
        </div>
    );
}
