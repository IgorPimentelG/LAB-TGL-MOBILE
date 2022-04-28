import { Bet } from './bets';

// Data
export type User = {
    id: number;
    email: string;
    is_admin?: number;
    name: string;
    token?: string | null;
    token_created_at?: string | null;
    created_at: string;
    updated_at: string;
    picture?: string | null;
	bets?: Bet[] 
}

export type Token = {
    type: string;
	token: string;
	expires_at: string;
}

// Payloads
export type CreateUserPayload = {
	name: string;
	email: string;
	password: string;
}

export type UpdateUserPayload = {
	email: string;
	name: string;
}

// Responses
export type CreateUserResponse = {
	data: {
		user: User;
		token: Token;
	}
}

export type UpdateUserResponse = {
	user: User;
}

export type MyAccountResponse = {
	data: { 
		id: number;
		email: string;
		is_admin: number;
		name: string;
		token: string;
		token_created_at: string;
		created_at: string;
		updated_at: string;
		bets: Bet[]
	}
}