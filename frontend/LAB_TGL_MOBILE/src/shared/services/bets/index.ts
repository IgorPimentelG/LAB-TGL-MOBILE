import { api } from '../api/axios.config';
import { AllBetsResponse, NewBetPayload, NewBetResponse } from '@shared/model/types/bets';

const bets = () => {
    
    function listBet(): Promise<AllBetsResponse> {
        return api.get('bet/all-bets');
    }

    function newBet(games: NewBetPayload): Promise<NewBetResponse> {
        return api.post('bet/new-bet', JSON.stringify(games));
    }

    return { listBet, newBet };
}

export { bets };