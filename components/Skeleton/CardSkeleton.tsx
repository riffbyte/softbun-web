import classNames from 'classnames';
import type { PropsWithChildren } from 'react';

export function CardSkeleton({ children, className }: PropsWithChildren<{ className?: string }>) {
    return (
        <div
            role="status"
            className={classNames(
                'relative block animate-pulse rounded-3xl bg-white p-8 pt-6 text-left shadow-lg dark:bg-label-dark dark:bg-opacity-50 dark:text-copy-white dark:shadow-none',
                className,
            )}
        >
            {children}
        </div>
    );
}
