import type { PropsWithChildren } from 'react';

export function CardSkeleton({ children }: PropsWithChildren<{}>) {
    return (
        <div
            role="status"
            className="block relative text-left p-8 pt-6 bg-white rounded-3xl shadow-lg dark:bg-label-dark dark:bg-opacity-50 dark:shadow-none dark:text-copy-white animate-pulse"
        >
            {children}
        </div>
    );
}
