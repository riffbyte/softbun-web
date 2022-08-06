import classNames from 'classnames';
import type { PropsWithChildren } from 'react';

interface Props {
    className?: string;
}

export function CardGrid({ className, children }: PropsWithChildren<Props>) {
    if (!children) {
        return null;
    }

    return (
        <div className={classNames('grid gap-8 md:grid-cols-2 lg:grid-cols-3', className)}>
            {children}
        </div>
    );
}
