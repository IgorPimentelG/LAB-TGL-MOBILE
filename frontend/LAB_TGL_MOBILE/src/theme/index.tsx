import { ThemeProvider } from 'styled-components';

const Theme: React.FC<{ children: any }> = ({ children }) => {
    
    const configTheme = {
        colors: {
            primary: '#B5C401',
            text: '#707070',
            label: '#C1C1C1',
            placeholder: '#9D9D9D',
            backgroundColor: '#F7F7F7',
            borderCard: '#DDDDDD',
            borderInput: '#EBEBEB'
        }
    }

    return(
        <ThemeProvider theme={configTheme}>
            {children}
        </ThemeProvider>
    );
}

export default Theme;