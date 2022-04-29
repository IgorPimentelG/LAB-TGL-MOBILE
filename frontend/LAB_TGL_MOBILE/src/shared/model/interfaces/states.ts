import { Game } from '@shared/model/types/games';
import { User, Token } from "@shared/model/types/user";
import { NewBet } from '@shared/model/types/bets';

export interface IUserStore {
    data: User | null;
    token: Token | null;
    isAuthenticated: boolean;
    lastSession: string | null;
}

export interface ILoadingStore {
    isLoading: boolean;
    message: string;
}

export interface IGamesStore {
    min_cart_value: number | null;
    types: Game[];
}

export interface ICartStore {
    cart: {
        id: number;
        game_id: number;
        numbers: number[];
    }[];
}