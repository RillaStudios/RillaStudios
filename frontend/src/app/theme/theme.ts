import { createTheme } from "@mantine/core";

export const appTheme = createTheme({
    primaryColor: 'primary',
    colors: {
        primary: [
            '#f2f5f8',
            '#e4e6e9',
            '#c4cbd4',
            '#a1afc0',
            '#8497af',
            '#7288a4',
            '#6781a1',
            '#566e8d',
            '#4b627e',
            '#1e2a38'
        ],
        secondary: [
            "#fff5e4",
            "#f9e9d3",
            "#edd2ac",
            "#e2ba81",
            "#d9a760",
            "#d29845",
            "#d09137",
            "#b87d29",
            "#a46f20",
            "#8f5f14"
        ],
        tertiary: [
            "#f9f1ff",
            "#eae3ef",
            "#d0c5d7",
            "#b5a6be",
            "#9986a5",
            "#8f7b9c",
            "#897297",
            "#766084",
            "#6a5577",
            "#5c486a"
        ]
    },
    primaryShade: 7,
    breakpoints: {
        xs: '36em',
        sm: '48em',
        md: '62em',
        lg: '75em',
        xl: '88em',
    },
    luminanceThreshold: 0.5,
    focusRing: 'auto',
    defaultRadius: 'sm',
    black: '#0B1215',
    white: '#FAF9F6',
    cursorType: 'pointer',
  fontFamily: 'Open Sans, sans-serif',
});