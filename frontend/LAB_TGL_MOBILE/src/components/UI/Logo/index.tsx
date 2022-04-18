import { Container, Text, TextHighlighted } from './styles';

const Logo = () => {
   return(
        <Container>
            <Text>{'The \nGreatest \nApp'}</Text>
            <TextHighlighted>for</TextHighlighted>
            <Text>LOTTERY</Text>
        </Container>
   );
}

export default Logo;