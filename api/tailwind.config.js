const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.php',
        './resources/**/*.{php,html,js,jsx,ts,tsx,vue,twig}',
        './node_modules/flowbite/**/*.{js,jsx,ts,tsx,vue}'
    ],
    safelist: [
        'truncate',
        {
            pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/,
            variants: [
                'md',
                'lg',
                'xl',
                ,],
        },
        {
            pattern: /(min|max)-(w|h)-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|full|screen|0|[100vw]|[100vh])/,
            variants: [
                'dark',
                'hover',
                'focus',
                'dark:hover',
                'dark:focus',
                ,],
        },
        {
            pattern: /bg-(primary|light|success|info|warning|danger)-(50|100|200|300|400|500|600|700|800|900|950)/,
            variants: [
                'dark',
                'hover',
                'focus',
                'dark:hover',
                'dark:focus',
                ,],
        },
        {
            pattern: /border-(primary|light|success|info|warning|danger)-(50|100|200|300|400|500|600|700|800|900|950)/,
            variants: [
                'dark',
                'hover',
                'focus',
                'dark:hover',
                'dark:focus',
                ,],
        },
        {
            pattern: /text-(primary|light|success|info|warning|danger)-(50|100|200|300|400|500|600|700|800|900|950)/,
            variants: [
                'dark',
                'hover',
                'focus',
                'dark:hover',
                'dark:focus',
                ,],
        },
        {
            pattern: /bg-[url('(*)')]/,
            variants: [
                'dark',
                'hover',
                'focus',
                'dark:hover',
                'dark:focus',
                ,],
        },

    ],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                'xxs': '340px',
                'xs': '400px',
                ...defaultTheme.screens,
            },
            colors: {
                gray: colors.slate,
                primary: {
                    50: '#f0f7ff',
                    100: '#dfeeff',
                    200: '#b9dcfe',
                    300: '#7bc2fe',
                    400: '#34a2fc',
                    500: '#0a87ed',
                    600: '#0069cb',
                    700: '#0054a6',
                    800: '#054887',
                    900: '#0a3c70',
                    950: '#07264a',
                },
                success: {
                    50: '#f1fcf2',
                    100: '#dff9e3',
                    200: '#c0f2c8',
                    300: '#8fe69c',
                    400: '#57d16a',
                    500: '#2fb344',
                    600: '#229735',
                    700: '#1e772c',
                    800: '#1d5e28',
                    900: '#194e23',
                    950: '#092a10',
                },
                warning: {
                    50: '#fff8ed',
                    100: '#ffefd4',
                    200: '#ffdca8',
                    300: '#ffc271',
                    400: '#ff9d38',
                    500: '#fe8011',
                    600: '#f76707',
                    700: '#c64a08',
                    800: '#9d3a0f',
                    900: '#7e3210',
                    950: '#441706',
                },
                danger: {
                    50: '#fff1f3',
                    100: '#ffdfe3',
                    200: '#ffc4cb',
                    300: '#ff9aa5',
                    400: '#ff6072',
                    500: '#ff2f46',
                    600: '#f21029',
                    700: '#bd081c',
                    800: '#a90b1c',
                    900: '#8b111e',
                    950: '#4c030b',
                },
                // info: {
                //     50: '#f0f7ff',
                //     100: '#dfeeff',
                //     200: '#b9dcfe',
                //     300: '#7bc2fe',
                //     400: '#34a2fc',
                //     500: '#0a87ed',
                //     600: '#0069cb',
                //     700: '#0054a6',
                //     800: '#054887',
                //     900: '#0a3c70',
                //     950: '#07264a',
                // },
                info: colors.sky,
                // info: {
                //     50: '#eff6ff',
                //     100: '#dbeafe',
                //     200: '#bfdbfe',
                //     300: '#93c5fd',
                //     400: '#60a5fa',
                //     500: '#3b82f6',
                //     600: '#2563eb',
                //     700: '#1d4ed8',
                //     800: '#1e40af',
                //     900: '#1e3a8a',
                //     950: '#172554',
                // },
                // primary: {
                //     50: '#eff6ff',
                //     100: '#dbeafe',
                //     200: '#bfdbfe',
                //     300: '#93c5fd',
                //     400: '#60a5fa',
                //     500: '#3b82f6',
                //     600: '#2563eb',
                //     700: '#1d4ed8',
                //     800: '#1e40af',
                //     900: '#1e3a8a',
                //     950: '#172554',
                //},
                ...defaultTheme.colors,
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
                body: [
                    'Inter',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'system-ui',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji',
                ],
                sans: [
                    'Inter',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'system-ui',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji',
                ],
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('flowbite/plugin'),
    ],
}
