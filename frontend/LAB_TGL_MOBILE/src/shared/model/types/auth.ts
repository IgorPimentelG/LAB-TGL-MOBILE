import { User, Token } from "./user";

// Payloads
export type LoginPayload = {
    email: string;
    password: string;
}

export type FindUserPayload = {
    email: string;
}

export type ChangePasswordPayload = {
    password: string;
    token: string;
}

// Responses
export type LoginResponse = {
    data: {
        user: User;
        token: Token;
    }
}

export type FindUserResponse = {
    data: {
        created_at: string;
        email: string;
        id: number;
        is_admin: number;
        name: string;
        token: string;
        token_created_at: string;
        updated_at: string;

    }
}

export type ChangePasswordResponse = {
    data: {
        user: User;
    }
}