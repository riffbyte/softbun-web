import type { ComponentProps } from 'react';
import { GitHub, Send, Twitter } from 'react-feather';

import { Section } from '@/components';

export function ContactsSection({
    title = 'Get in touch',
    counter,
}: Pick<ComponentProps<typeof Section>, 'counter' | 'title'>) {
    return (
        <Section title={title} counter={counter}>
            <ul className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10">
                <li>
                    <a
                        href="https://t.me/SatoAV"
                        className="hover:text-purple dark:hover:text-aquamarine"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Send className="inline-block" aria-label="Telegram:" /> @SatoAV
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/softbun_dev"
                        className="hover:text-purple dark:hover:text-aquamarine"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Twitter className="inline-block" aria-label="Twitter:" /> @softbun_dev
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/oleg-semyonov"
                        className="hover:text-purple dark:hover:text-aquamarine"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHub className="inline-block" aria-label="GitHub:" /> @oleg-semyonov
                    </a>
                </li>
            </ul>
        </Section>
    );
}
