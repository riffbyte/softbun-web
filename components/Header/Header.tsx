'use client';

import classNames from 'classnames';
import { useState } from 'react';
import { Menu, X } from 'react-feather';

import { Button } from '@/components';

import { NavItem } from './NavItem';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen((o) => !o);
    }

    return (
        <header
            className={classNames(
                'container relative py-6 lg:py-8 flex items-center justify-end space-x-2 md:space-x-6',
                { 'bg-white dark:bg-onyx': isMenuOpen },
            )}
        >
            <nav
                role="navigation"
                className={classNames(
                    'w-full absolute md:static md:block md:w-auto',
                    'top-[100%] left-0 right-0',
                    'after:content-[""] after:block after:md:hidden after:absolute after:top-[100%] after:left-0 after:right-0 after:h-60 after:bg-gradient-to-b after:from-white dark:after:from-onyx',
                    {
                        hidden: !isMenuOpen,
                    },
                )}
                id="navbar-default"
            >
                <ul className="flex-grow flex items-end md:items-center flex-col md:flex-row md:justify-end space-y-6 md:space-y-0 md:space-x-4 bg-white dark:bg-onyx md:bg-transparent p-6 md:p-0">
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/blog" allowPartialMatch>
                        Blog
                    </NavItem>
                    <NavItem href="/portfolio" allowPartialMatch>
                        Portfolio
                    </NavItem>
                    <NavItem href="#contacts">Contact me</NavItem>
                </ul>
            </nav>
            <ThemeToggle />
            <Button
                onClick={toggleMenu}
                className="md:hidden"
                variation="navigation"
                data-collapse-toggle="navbar-default"
                aria-controls="navbar-default"
                aria-expanded={isMenuOpen}
            >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X width={24} height={24} /> : <Menu width={24} height={24} />}
            </Button>
        </header>
    );
}
