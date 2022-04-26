import { ThemeProvider } from 'styled-components';

const Theme: React.FC<{ children: any }> = ({ children }) => {
    
    const configTheme = {
        text: {
            gray900: '#868686',
            gray800: '#707070',
            gray500: '#9D9D9D',
            gray100: '#C1C1C1',
        },

        backgrund: {
            white900: '#F7F7F7'
        },

        main: {
            green900: '#B5C401',
            red700: '#C30'
        },

        border: {
            gray50: '#EBEBEB',
            gray100: '#DDDDDD',
        }
    }

    return(
        <ThemeProvider theme={configTheme}>
            {children}
        </ThemeProvider>
    );
}

export default Theme;