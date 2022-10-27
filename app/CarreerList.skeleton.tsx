import { times } from 'lodash-es';

import { TextSkeleton } from '@/components';

export function CarreerListSkeleton() {
    return (
        <ul className="text-lg md:text-xl">
            {times(3).map((item) => (
                <TextSkeleton key={item} className="my-4" />
            ))}
        </ul>
    );
}
