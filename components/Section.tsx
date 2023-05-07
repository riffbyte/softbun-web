import classNames from 'classnames';
import type { PropsWithChildren } from 'react';

interface Props {
    id?: string;
    title?: string;
    className?: string;
    contentClassName?: string;
    expanded?: boolean;
    counter?: boolean;
    prose?: boolean;
}

export function Section({
    children,
    id,
    title,
    className,
    contentClassName,
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
                    className={classNames('mb-10 font-mono text-4xl font-bold', {
                        'section-counter': counter,
                    })}
                >
                    &lt;{title}&gt;
                </h2>
            )}
            <div
                className={classNames(contentClassName, {
                    'prose dark:prose-invert': prose,
                })}
            >
                {children}
            </div>
            {title && (
                <p className="mt-20 text-right font-mono text-2xl font-bold text-copy-gray">
                    &lt;/{title}&gt;
                </p>
            )}
        </section>
    );
}
