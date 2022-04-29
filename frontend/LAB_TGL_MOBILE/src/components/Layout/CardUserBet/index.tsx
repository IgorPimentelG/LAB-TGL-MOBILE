import { Line } from "@components/UI";
import { RootState } from '@store/index';
import { useSelector } from 'react-redux';
import { Bet } from "@shared/model/types/bets";
import { Game } from '@shared/model/types/games';
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

    const typesGames = useSelector<RootState, Game[]>((state) => state.games.types);

    const choosenNumbersFormated = formatNumbers(data.choosen_numbers);
    const priceFormated = formatPrice(data.price);
    const dateFormated = formatDate(data.created_at);

    const game = typesGames.filter((item) => item.id === data.game_id)[0];

    if( !game ) {
        return <></>;
    }

    return(
        <RootContainer>
            <Line color={game.color}/>
            <ContainerContent>
                <Numbers>{choosenNumbersFormated}</Numbers>
                <ContainerInfo>
                    <LabelInfo>
                        {dateFormated} - (R$ {priceFormated})
                    </LabelInfo>
                </ContainerInfo>
                <LabelType color={game.color}>{game.type}</LabelType>
            </ContainerContent>
        </RootContainer>
    );
}

export default CardUserBet;