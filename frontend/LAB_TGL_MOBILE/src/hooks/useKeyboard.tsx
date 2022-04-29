import { Game } from '@shared/model/types/games';
import { DataKeyboard, Key, KeyboardConfiguration } from '@shared/model/types/keyboard';

const useKeyboard = (dataKeyboard: DataKeyboard) => {

    function keysConfig(game: Game): KeyboardConfiguration {
        const keys: Key[] = [];

        for(let i = 1; i < game.range + 1; i++) {
            keys.push({
                value: i,
                label: (i < 10 ? `0${i}` : `${i}`),
                activeColor: game.color,
            });
        }
        return {keys, data: dataKeyboard};
    }

    return { keysConfig };
}

export default useKeyboard;