import classNames from 'classnames';
import Head from 'next/head';
import type { PropsWithChildren } from 'react';

import { Footer, Header } from './components';

interface LayoutProps {
    title?: string;
    centered?: boolean;
}

export function Layout({
    children,
    centered,
    title = 'Soft Bun Dev',
}: PropsWithChildren<LayoutProps>) {
    return (
        <div className="root-container">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Making stuff happen" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main
                className={classNames('container flex-grow pb-20', {
                    'flex flex-col justify-center items-center': centered,
                })}
            >
                {children}
            </main>
        </div>
    );
}
