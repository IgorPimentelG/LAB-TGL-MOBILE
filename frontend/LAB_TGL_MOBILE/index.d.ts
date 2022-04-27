import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        text: {
            gray900: string;
            gray800: string;
            gray500: string;
            gray100: string;
        },

        backgrund: {
            white900: string;
        },

        main: {
            green900: string;
            green700: string;
            red700: string;
        },

        border: {
            gray50: string;
            gray100: string;
        }
    }
}