'use client';

import classNames from 'classnames';
import { useState } from 'react';
import { Menu, X } from 'react-feather';

import { Button } from '../Button';

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
                'container relative flex items-center justify-end space-x-2 py-6 md:space-x-6 lg:py-8',
                { 'bg-white dark:bg-onyx': isMenuOpen },
            )}
        >
            <nav
                role="navigation"
                className={classNames(
                    'absolute w-full md:static md:block md:w-auto',
                    'left-0 right-0 top-[100%]',
                    'after:absolute after:left-0 after:right-0 after:top-[100%] after:block after:h-60 after:bg-gradient-to-b after:from-white after:content-[""] dark:after:from-onyx after:md:hidden',
                    {
                        hidden: !isMenuOpen,
                    },
                )}
                id="navbar-default"
            >
                <ul className="flex flex-grow flex-col items-end space-y-6 bg-white p-6 dark:bg-onyx md:flex-row md:items-center md:justify-end md:space-x-4 md:space-y-0 md:bg-transparent md:p-0">
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
