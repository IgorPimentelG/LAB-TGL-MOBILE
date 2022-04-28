import { Container } from './styles';
import { useTheme } from 'styled-components';
import { Entypo } from '@expo/vector-icons';

const IconScroll = () => {

    const theme = useTheme();

    return(
        <Container>
            <Entypo 
                name='select-arrows' 
                color={theme.text.gray800}
                size={25}
            />
        </Container>
    );
}

export default IconScroll;