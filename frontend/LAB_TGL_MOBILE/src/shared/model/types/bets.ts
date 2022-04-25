// Data
export type NewBet = {
    game_id: number;
    numbers: number[];
}

export type Bet = {
    id: number;
    choosen_numbers: string;
    user_id: number;
    game_id: number;
    price: number;
    created_at: string;
    updated_at?: string;
    type?: {
        id: number;
        type: string;
    }
}

// Payloads
export type NewBetPayload = {
    games: NewBet[];
}

// Responses
export type NewBetResponse = {
    bet: Bet[];
}

export type AllBetsResponse = {
    bets: Bet[];
}