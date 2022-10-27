import classNames from 'classnames';
import { times } from 'lodash-es';

interface Props {
    /**
     * A Tailwind `text-*` class
     */
    textClassName?: string;
    className?: string;
    lines?: number;
}

export function TextSkeleton({ textClassName = 'text-base', className, lines = 1 }: Props) {
    return (
        <div className={classNames(textClassName, className)}>
            {times(lines).map((line) => (
                <div key={line} className="w-full relative flex items-center">
                    &nbsp;
                    <div className="absolute h-[1em] w-full rounded-lg bg-[currentColor] opacity-25" />
                </div>
            ))}
        </div>
    );
}
