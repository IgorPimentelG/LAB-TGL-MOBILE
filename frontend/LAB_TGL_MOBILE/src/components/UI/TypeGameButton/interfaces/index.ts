export interface IConfigTypeGame {
    id: number;
    name: string;
    color: string;
    isEnabled: boolean;
    onPress: () => void;
}