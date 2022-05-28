module.exports = {
    darkMode: 'class',
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './modules/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                onyx: '#1c1d22',
                aquamarine: '#47e5bc',
                'aquamarine-darker': '#2fdaaa',
                snow: '#fdfdff',
            },
            typography: ({ theme }) => ({
                // See https://tailwindcss.com/docs/typography-plugin#adding-custom-color-themes
                DEFAULT: {
                    css: {
                        '--tw-prose-body': theme('colors.gray[400]'),
                        '--tw-prose-headings': theme('colors.white'),
                        '--tw-prose-lead': theme('colors.white'),
                        '--tw-prose-links': theme('colors.aquamarine'),
                        '--tw-prose-counters': theme('colors.white'),
                        '--tw-prose-bullets': theme('colors.white'),
                        '--tw-prose-hr': theme('colors.gray[600]'),
                        '--tw-prose-quotes': theme('colors.white'),
                        '--tw-prose-quote-borders': theme('colors.aquamarine'),
                        '--tw-prose-captions': theme('colors.pink[700]'),
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
