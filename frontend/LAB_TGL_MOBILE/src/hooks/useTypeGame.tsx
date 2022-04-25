import { useEffect, useState } from 'react';
import { RootState } from '@store/index';
import { games } from '@shared/services';
import { Game } from '@shared/model/types/games';
import { gamesActions } from '@store/games-slice';
import { loadingActions } from '@store/loading-slice';
import { useSelector, useDispatch } from 'react-redux';

type Config = {
    multipleSelection: boolean;
};

const useTypeGame = (config?: Config) => {

    const dispatch = useDispatch();
    const typesGames = useSelector<RootState, Game[]>((state) => state.games.types);

    const { listGames } = games();
    const { loadGames } = gamesActions;
    const { enableLoading, disableLoading } = loadingActions;

    const [selectedGames, setSelectedGames] = useState<Game[]>([]);

    // Consultar os games disponíveis
    useEffect(() => {
        async function fetchGames() {
            dispatch(enableLoading('Carregando games'));
            const response = await listGames();
            dispatch(loadGames(response.data));
            dispatch(disableLoading());
        }

        if( typesGames.length === 0) {
            fetchGames();
        } 
    }, [typesGames]);

    function changeGameHandler(id: number) {

        const game = typesGames.filter((item) => item.id === id)[0];

        if( config && config.multipleSelection ) { 
            const isEnabled = verifyStatus(id);

            if( isEnabled ) {                       // Desativar game
                setSelectedGames((currentState) => {
                    return currentState.filter((item) => item.id !== id);
                });
            } else {                                // Ativar game
                setSelectedGames((currentState) => {
                    return [...currentState, game];
                });
            }
        } else {
            setSelectedGames([game]);
        }
    }

    function verifyStatus(id: number): boolean {
        return selectedGames.some((item) => {
            return item.id === id;
        });
    }

    function configSwitchGame() {
        return typesGames.map((item) => {
            return {
                id: item.id,
                name: item.type,
                color: item.color,
                isEnabled: verifyStatus(item.id),
                onPress: changeGameHandler.bind(null, item.id)
            };
        });
    }

    function searchConfigGame(id: number): Game {
        return typesGames.filter((type) => type.id === id)[0];
    }

    return { configSwitchGame, searchConfigGame };
}

export { useTypeGame };