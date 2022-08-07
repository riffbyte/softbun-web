import Link from 'next/link';

import { ThemeToggle } from './ThemeToggle';

export function Header() {
    return (
        <header className="container py-6 lg:py-8 flex items-center justify-end space-x-6">
            <ThemeToggle />
        </header>
    );
}
