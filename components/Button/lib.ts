import classNames from 'classnames';

import type { ButtonVariation } from './types';

export function getButtonClassName(variation: ButtonVariation, customClassName?: string) {
    return classNames(
        `
        inline-flex items-center justify-center 
        rounded-md
        focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-onyx 
        `,
        {
            [`
            text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500
            dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-500
            shadow-sm
            `]: variation === 'primary',
            [`
            px-10 py-3 border border-transparent
            text-lg font-medium  
            `]: variation === 'primary',
            [`
            p-2 shadow-none
            hover:bg-gray-100 dark:hover:bg-label-dark dark:bg-opacity-50
            focus:ring-gray-200
            `]: variation === 'navigation',
        },
        customClassName,
    );
}
