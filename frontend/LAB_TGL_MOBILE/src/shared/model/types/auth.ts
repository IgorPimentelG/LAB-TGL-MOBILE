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
    user: User;
    token: Token;
}

export type ResetPasswordResponse = {
    user: User;
}

export type ChangePasswordResponse = {
    user: User;
}