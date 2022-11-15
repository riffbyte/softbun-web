import classNames from 'classnames';
import type { PropsWithChildren } from 'react';

export function CardSkeleton({ children, className }: PropsWithChildren<{ className?: string }>) {
    return (
        <div
            role="status"
            className={classNames(
                'block relative text-left p-8 pt-6 bg-white rounded-3xl shadow-lg dark:bg-label-dark dark:bg-opacity-50 dark:shadow-none dark:text-copy-white animate-pulse',
                className,
            )}
        >
            {children}
        </div>
    );
}
