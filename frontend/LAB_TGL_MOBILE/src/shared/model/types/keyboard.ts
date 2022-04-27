export type Key = {
    label: string;
    value: number;
    activeColor: string;
}

export type DataKeyboard = {
    numbersSelected: number[];
    onAddNumber: (newNumber: number) => void;
    onRemoveNumber: (numberRemoved: number) => void;
}

export type KeyboardConfiguration = {
        keys: Key[];
        data: DataKeyboard;
}