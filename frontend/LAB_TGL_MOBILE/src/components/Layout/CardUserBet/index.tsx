import { Line } from "@components/UI";
import { useTypeGame } from "@hooks/useTypeGame";
import { Bet } from "@shared/model/types/bets";
import { formatDate, formatNumbers, formatPrice } from "@shared/util/formatBets";
import { 
    RootContainer,
    ContainerContent,
    ContainerInfo, 
    LabelInfo,
    Numbers,
    LabelType, 
} from "./styles";

const CardUserBet: React.FC<{ data: Bet }> = ({ data }) => {

    const choosenNumbersFormated = formatNumbers(data.choosen_numbers);
    const priceFormated = formatPrice(data.price);
    const dateFormated = formatDate(data.created_at);

    const { searchConfigGame } = useTypeGame();
    const game = searchConfigGame(data.game_id);

    return(
        <RootContainer>
            <Line color={game.color}/>
            <ContainerContent>
                <Numbers>{choosenNumbersFormated}</Numbers>
                <ContainerInfo>
                    <LabelInfo>
                        {dateFormated} - ({priceFormated})
                    </LabelInfo>
                </ContainerInfo>
                <LabelType color={game.color}>{game.type}</LabelType>
            </ContainerContent>
        </RootContainer>
    );
}

export default CardUserBet;