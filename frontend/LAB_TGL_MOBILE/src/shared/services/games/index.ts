import { ListGameResponse } from '@shared/model/types/games';
import { api } from '../axios.config';

const games = () => {
    
    function listGames(): Promise<ListGameResponse> {
        return api.get('cart_games')
    }

    return { listGames };
}

export { games };