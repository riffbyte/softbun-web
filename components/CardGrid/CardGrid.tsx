import type { PropsWithChildren } from 'react';

export function CardGrid({ children }: PropsWithChildren<{}>) {
    if (!children) {
        return null;
    }

    return <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{children}</div>;
}
