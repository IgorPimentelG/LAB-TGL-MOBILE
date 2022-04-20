import { User, Token } from "@shared/model/types/user";

export interface IUserStore {
    data: User | null;
    token: Token | null;
    isAuthenticated: boolean;
}