import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            text: string;
            label: string;
            placeholder: string;
            backgroundColor: string;
            borderCard: string;
            borderInput: string;
            error: string;
        }
    }
}