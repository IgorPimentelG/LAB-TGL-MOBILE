import { Container } from './styles';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

const IconScroll = () => {

    const theme = useTheme();

    return(
        <Container>
            <AntDesign 
                name='circledown' 
                color={theme.text.gray800}
                size={25}
            />
        </Container>
    );
}

export default IconScroll;