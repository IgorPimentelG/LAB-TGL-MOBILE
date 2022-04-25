import { ThemeProvider } from 'styled-components';
import { IConfigTheme } from '@shared/model/interfaces/theme';

const Theme: React.FC<{ children: any }> = ({ children }) => {
    
    const configTheme: IConfigTheme = {
        colors: {
            primary: '#B5C401',
            text: '#707070',
            label: '#C1C1C1',
            placeholder: '#9D9D9D',
            backgroundColor: '#F7F7F7',
            borderCard: '#DDDDDD',
            borderInput: '#EBEBEB',
            error: '#C30'
        }
    }

    return(
        <ThemeProvider theme={configTheme}>
            {children}
        </ThemeProvider>
    );
}

export default Theme;