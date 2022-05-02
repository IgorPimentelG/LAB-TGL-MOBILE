import { Container, ContainerContent, ContainerInfo, LabelPrice, Touchable } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { LabelType, Numbers } from '../CardUserBet/styles';
import { formatNumbers, formatPrice } from '@shared/util/formatBets';

const CardNewBet: React.FC<{
    numbers: number[];
    price: number;
    game: string;
    colorGame: string;
    onRemove?: () => void
}> = ({ numbers, price, game, colorGame, onRemove }) => {

    const numbersFormated = formatNumbers(numbers.map((item) => String(item)).join(','));
    const priceFormated = formatPrice(price);

    return(
        <Container>
            { onRemove && <Touchable onPress={onRemove}>
                <Ionicons
                    name='trash-outline'
                    size={25}
                    color={'#888888'}
                />
            </Touchable>}
            <ContainerContent colorGame={colorGame}>
                <Numbers>{numbersFormated}</Numbers>
                <ContainerInfo>
                    <LabelType color={colorGame}>{game}</LabelType>
                    <LabelPrice>R$ {priceFormated}</LabelPrice>
                </ContainerInfo>
            </ContainerContent>
        </Container>
    );
}

export default CardNewBet;