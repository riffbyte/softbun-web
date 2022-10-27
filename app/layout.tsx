import type { PropsWithChildren } from 'react';

import { ThemeContext } from '@/app/components/ThemeContext';
import { Header } from '@/components';

import '../styles/globals.css';

export default function RootLayout({ children }: PropsWithChildren<{}>) {
    return (
        <html lang="en">
            {/* eslint-disable-next-line @next/next/no-head-element */}
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
            </head>
            <body className="root-container">
                <ThemeContext>
                    <Header />

                    <main className="container flex-grow pb-20">{children}</main>
                </ThemeContext>
            </body>
        </html>
    );
}
