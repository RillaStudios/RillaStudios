import { createTheme } from "@mantine/core";

export const appTheme = createTheme({

    //! APP COLORS

    // Primary color
    primaryColor: 'primary',

    // Color scheme
    colors: {
        primary: [
            "#f2f5f8",
            "#e4e6e9",
            "#c4cbd4",
            "#a1afc0",
            "#8497af",
            "#7288a4",
            "#6781a1",
            "#566e8d",
            "#4b627e",
            "#1e2a38"
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

    // Default black color
    black: '#0B1215',

    // Default white color
    white: '#FAF9F6',

    //! COLOR SETTINGS

    // The primary color shade to use
    primaryShade: 5,

    // Disable auto contrast for all components
    autoContrast: false,

    // The threshold to use for luminance-based color scheme switching
    // will switch text color to black if the luminance of the background 
    // color is above this value
    luminanceThreshold: 0.5,

    //! APP BREKPOINTS

    // App breakpoints
    breakpoints: {
        xs: '36em',
        sm: '48em',
        md: '62em',
        lg: '75em',
        xl: '88em',
    },

    //! APP LOOK AND FEEL

    // Shows a focus ring on elements when they are focused
    focusRing: 'auto',

    // Default radius for components
    defaultRadius: 'sm',

    // Radius sizes
    radius: {
        xs: '0.125rem',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        xxl: '1rem',
    },

    // Cursor style for all components
    cursorType: 'pointer',

    // Shadow style for all components
    shadows: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
        md: '0 1px 5px rgba(0, 0, 0, 0.15)',
        lg: '0 1px 10px rgba(0, 0, 0, 0.2)',
        xl: '0 1px 20px rgba(0, 0, 0, 0.25)',
    },

    // Scale factor for all components
    scale: 1,

    //! FONT SETTINGS

    // Enable font smoothing
    fontSmoothing: true,

    // Font family for all components
    fontFamily: 'Open Sans, sans-serif',


});