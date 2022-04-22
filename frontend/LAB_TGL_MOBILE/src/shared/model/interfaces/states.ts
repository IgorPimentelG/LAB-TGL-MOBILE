import { User, Token } from "@shared/model/types/user";

export interface IUserStore {
    data: User | null;
    token: Token | null;
    isAuthenticated: boolean;
}

export interface ILoadingStore {
    isLoading: boolean;
    message: string;
}