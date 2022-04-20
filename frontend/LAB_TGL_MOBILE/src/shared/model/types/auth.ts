import { User, Token } from "./user";

// Payloads
export type LoginPayload = {
    email: string;
    password: string;
}

export type ResetPasswordPayload = {
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

export type ResetPasswordResponse = {
    data: {
        user: User;
    }
}

export type ChangePasswordResponse = {
    data: {
        user: User;
    }
}