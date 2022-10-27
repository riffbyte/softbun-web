import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';

import { Button } from '@/components';

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    const isDarkTheme = resolvedTheme === 'dark';

    function toggleTheme() {
        setTheme(isDarkTheme ? 'light' : 'dark');
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />;
    }

    const label = isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme';

    return (
        <div className="w-10 h-10 flex items-center justify-center">
            <span className="sr-only">Current theme: {resolvedTheme}</span>
            <Button onClick={toggleTheme} variation="navigation" title={label}>
                <span className="sr-only">{label}</span>
                {isDarkTheme ? <Sun width={24} height={24} /> : <Moon width={24} height={24} />}
            </Button>
        </div>
    );
}
