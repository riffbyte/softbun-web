import classNames from 'classnames';
import type { PropsWithChildren } from 'react';

interface Props {
    id?: string;
    title?: string;
    className?: string;
    expanded?: boolean;
    counter?: boolean;
    prose?: boolean;
}

export function Section({
    children,
    id,
    title,
    className,
    expanded,
    counter,
    prose,
}: PropsWithChildren<Props>) {
    return (
        <section
            id={id}
            className={classNames(className, {
                'py-40 lg:py-60': expanded,
                'py-10 lg:py-20': !expanded,
                'section-with-count': counter,
            })}
        >
            {title && (
                <h2
                    className={classNames('text-4xl font-mono font-bold mb-10', {
                        'section-counter': counter,
                    })}
                >
                    &lt;{title}&gt;
                </h2>
            )}
            {prose ? <div className="prose dark:prose-invert">{children}</div> : children}
            {title && (
                <p className="text-2xl text-copy-gray text-right font-mono font-bold mt-20">
                    &lt;/{title}&gt;
                </p>
            )}
        </section>
    );
}
