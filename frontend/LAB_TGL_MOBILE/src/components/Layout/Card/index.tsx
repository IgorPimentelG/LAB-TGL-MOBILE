import { Container } from './styles';
import { useWindowDimensions } from 'react-native';

const Card: React.FC<{ children: any }> = ({ children }) => {

    const { width } = useWindowDimensions(); 

    return(
        <Container screenWidth={width}>
            {children}
        </Container>
    );
}

export default Card;