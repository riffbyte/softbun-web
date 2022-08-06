/* eslint-disable @typescript-eslint/naming-convention */
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './modules/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                onyx: '#1D2C33',
                aquamarine: '#00d1c7',
                purple: '#646aff',
                snow: '#fcfcfc',
                'copy-black': '#383838',
                'copy-gray': '#a7a7a7',
                'copy-white': '#f5f5f5',
                'label-light': '#ededed',
                'label-dark': '#344851',
            },
            fontFamily: {
                sans: ['Open Sans', 'sans-serif'],
                display: ['Bakbak One', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1152px',
                    '2xl': '1152px',
                },
            },
            typography: ({ theme }) => ({
                // See https://tailwindcss.com/docs/typography-plugin#adding-custom-color-themes
                DEFAULT: {
                    css: {
                        '--tw-prose-body': theme('colors.copy-black'),
                        '--tw-prose-headings': theme('colors.copy-black'),
                        '--tw-prose-lead': theme('colors.copy-black'),
                        '--tw-prose-links': theme('colors.purple'),
                        '--tw-prose-counters': theme('colors.purple'),
                        '--tw-prose-bullets': theme('colors.purple'),
                        '--tw-prose-hr': theme('colors.gray[600]'),
                        '--tw-prose-quotes': theme('colors.copy-black'),
                        '--tw-prose-quote-borders': theme('colors.purple'),
                        '--tw-prose-captions': theme('colors.copy-gray'),
                        '--tw-prose-code': theme('colors.copy-black'),
                        '--tw-prose-pre-code': theme('colors.copy-black'),
                        '--tw-prose-pre-bg': theme('colors.copy-gray'),
                        '--tw-prose-th-borders': theme('colors.gray[400]'),
                        '--tw-prose-td-borders': theme('colors.gray[400]'),
                        '--tw-prose-invert-body': theme('colors.copy-white'),
                        '--tw-prose-invert-headings': theme('colors.copy-white'),
                        '--tw-prose-invert-lead': theme('colors.copy-white'),
                        '--tw-prose-invert-links': theme('colors.aquamarine'),
                        '--tw-prose-invert-bold': theme('colors.copy-white'),
                        '--tw-prose-invert-counters': theme('colors.aquamarine'),
                        '--tw-prose-invert-bullets': theme('colors.aquamarine'),
                        '--tw-prose-invert-hr': theme('colors.gray[700]'),
                        '--tw-prose-invert-quotes': theme('colors.copy-white'),
                        '--tw-prose-invert-quote-borders': theme('colors.aquamarine'),
                        '--tw-prose-invert-captions': theme('colors.copy-gray'),
                        '--tw-prose-invert-code': theme('colors.copy-white'),
                        '--tw-prose-invert-pre-code': theme('colors.copy-white'),
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-th-borders': theme('colors.gray[700]'),
                        '--tw-prose-invert-td-borders': theme('colors.gray[700]'),
                    },
                },
            }),
        },
    },
    // eslint-disable-next-line global-require, import/no-extraneous-dependencies
    plugins: [require('@tailwindcss/typography')],
};
