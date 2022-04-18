import { Container } from './styles';

const Card: React.FC<{ children: any }> = ({ children }) => {
    return(
        <Container>
            {children}
        </Container>
    );
}

export default Card;