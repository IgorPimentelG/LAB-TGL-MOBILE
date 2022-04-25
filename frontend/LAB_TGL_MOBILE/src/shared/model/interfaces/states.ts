import { Game } from '@shared/model/types/games';
import { User, Token } from "@shared/model/types/user";

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
    minCartValue: number | null;
    types: Game[];
}