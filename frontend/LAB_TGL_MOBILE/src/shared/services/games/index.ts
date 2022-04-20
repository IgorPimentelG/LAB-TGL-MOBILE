import { api } from '../api/axios.config';
import { ListGameResponse } from '@shared/model/types/games';

const games = () => {
    
    function listGames(): Promise<ListGameResponse> {
        return api.get('cart_games')
    }

    return { listGames };
}

export { games };