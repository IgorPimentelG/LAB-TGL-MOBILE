import { Bet } from "@shared/model/types/bets";
import { Game } from "@shared/model/types/games";
import { RootState } from "@store/index";
import { useSelector } from "react-redux";

const useSort = () => {

    const games = useSelector<RootState, Game[]>((state) => state.games.types);

    function searchGameName(id: number): string {
        if( games.length === 0 ) {
            return '';
        }
        
        return games.filter((game) => game.id === id)[0].type;
    }

    function sortBets(bet1: Bet, bet2: Bet) {
        
        const gameName1 = searchGameName(bet1.game_id);
        const gameName2 = searchGameName(bet2.game_id);

        if( gameName1 < gameName2 ) {
            return -1;
        } else if( gameName1 > gameName2 ) {
            return 1;
        } else {
            return 0;
        }
    }

    return { sortBets };
};

export { useSort }