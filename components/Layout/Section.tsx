import classNames from 'classnames';
import type { PropsWithChildren } from 'react';

interface Props {
    title?: string;
    className?: string;
    expanded?: boolean;
}

export function Section({ children, title, className, expanded }: PropsWithChildren<Props>) {
    return (
        <div
            className={classNames('py-10 lg:py-20 text-gray-400', className, {
                'py-40 lg:py-60': expanded,
            })}
        >
            {title && <h2 className="text-4xl font-bold text-white my-8">{title}</h2>}
            {children}
        </div>
    );
}
