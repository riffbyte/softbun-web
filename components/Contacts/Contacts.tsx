import { GitHub, Linkedin, Send, Twitter } from 'react-feather';

export function Contacts() {
    return (
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
            <li>
                <a
                    href="https://www.linkedin.com/in/oleg-semyonov-609176250/"
                    className="hover:text-purple dark:hover:text-aquamarine"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Linkedin className="inline-block" aria-label="Linkedin:" /> Oleg Semyonov
                </a>
            </li>
        </ul>
    );
}
