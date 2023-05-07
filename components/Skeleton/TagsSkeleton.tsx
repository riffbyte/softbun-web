import classNames from 'classnames';
import { times } from 'lodash-es';

interface Props {
    className?: string;
    count?: number;
}

export function TagsSkeleton({ className, count = 3 }: Props) {
    return (
        <div className={classNames('flex flex-wrap gap-2', className)}>
            {times(count).map((tag, index) => (
                <div
                    key={tag}
                    className={classNames(
                        `
                            whitespace-nowrap rounded-full bg-label-light px-2 
                            py-1 text-sm dark:bg-label-dark
                        `,
                        index % 2 === 0 ? 'w-[120px]' : 'w-[150px]',
                    )}
                >
                    &nbsp;
                </div>
            ))}
        </div>
    );
}
