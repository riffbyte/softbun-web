import { NavItem } from './NavItem';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
    return (
        <header className="container py-6 lg:py-8 flex items-center justify-end space-x-6">
            <nav role="navigation">
                <ul className="flex-grow flex items-center justify-end space-x-4">
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/portfolio">Portfolio</NavItem>
                    <NavItem href="#contacts">Contact me</NavItem>
                </ul>
            </nav>
            <ThemeToggle />
        </header>
    );
}
