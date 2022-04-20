// Data
export type Game = {
    id: number;
    type: string;
    description: string;
    range: number;
    price: number;
    max_number: number;
    color: string;
}

// Response
export type ListGameResponse = {
    min_cart_value: number;
    types: Game[];
}