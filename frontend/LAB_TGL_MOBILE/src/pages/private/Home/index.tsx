import React, { useEffect, useLayoutEffect, useState } from 'react';
import { RootState } from '@store/index';
import { user } from '@shared/services';
import { useSort } from '@hooks/useSort';
import { Entypo } from '@expo/vector-icons';
import { Bet } from '@shared/model/types/bets';
import { userActions } from '@store/user-slice';
import { useTypeGame } from '@hooks/useTypeGame';
import { loadingActions } from '@store/loading-slice';
import { useDispatch, useSelector } from 'react-redux';
import { NavButtonType } from '@shared/model/enums/form';
import { CardUserBet, ModalError } from '@components/Layout';
import { IconScroll, NavButton, Title, TypeGameButton } from '@components/UI';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { ContainerTypeGame, RootContainer, Label, ContainerBets, ContainerNav } from './styles';
import { useTheme } from 'styled-components';

const Home = () => {

    const dispatch = useDispatch();
    const theme = useTheme();

    const { account } = user();
    const { sortBets } = useSort();
    const { enableLoading, disableLoading } = loadingActions;
    const { updateBetsUser } = userActions;
    const { configSwitchGame, selectedGames } = useTypeGame({ multipleSelection: true });

    const userBets = useSelector<RootState, Bet[]>((state) => state.auth.data!.bets!);

    const [error, setError] = useState<string | null>();
    const [filterGames, setFilterGames] = useState<Bet[]>([]);
    const [showIconScroll, setShowIconScroll] = useState(false);

    // Consultar apostas do usuário logado
    useLayoutEffect(() => {

        dispatch(enableLoading('Carregando apostas...'));

        const fetchAccount = async () => {
           try {
                const response = await account();
                dispatch(updateBetsUser(response.data));
           } catch(error: any) {
                setError(error.message);
           }
        }   

        fetchAccount();
        dispatch(disableLoading());
    }, [userBets]);

    // Filter games
    useEffect(() => {
        if( userBets.length > 0 ) {
            let filter: Bet[] = [];

            if( selectedGames.length === 0 ) {   // Nenhum filtro selecionado 
                filter = [...userBets];
            } else {  // Existe filtro selecionado
                const gamesID = selectedGames.map((game) => game.id);
                filter = userBets.filter((bet) => {
                    const index = gamesID.indexOf(bet.game_id);
                    if( index !== -1 ) {
                        return bet;
                    }
                });
            }
            setFilterGames(() => {
                if( filter.length > 2 ) {
                    setShowIconScroll(true);
                } else {
                    setShowIconScroll(false);
                }

                return [...filter.sort(sortBets)];
            });
        }
    }, [selectedGames, userBets]);

    // Configura o icone de scroll
    function scrollListener(event: NativeSyntheticEvent<NativeScrollEvent>) {
        const heightScroll = event.nativeEvent.contentOffset.y;

        if( heightScroll < 30 ) {
            setShowIconScroll(true);
        } else {
            setShowIconScroll(false);
        }
    }

    function onConfirmModal() {
        setError(null);
    }
 
    return(
        <React.Fragment>
            <ModalError
                isVisible={!!error}
                onConfirm={onConfirmModal}
                message={error!}
            />
            <RootContainer>
                <Title>RECENT GAMES</Title>
                <ContainerTypeGame>
                    <Label>Filters</Label>
                    { configSwitchGame().map((item, index) => (
                        <TypeGameButton key={index} config={item}/>
                    ))}
                </ContainerTypeGame>     
                <ContainerBets>
                    {filterGames.length === 0 &&  ( 
                        <>
                            <Label>Nenhuma Aposta Encontrada</Label>
                            <Entypo name='emoji-sad' size={25} color={theme.colors.label} />
                        </>
                    )}
                    {filterGames.length > 0 && 
                        <FlatList
                            onScroll={scrollListener}
                            keyExtractor={(item) => item.id.toString()}
                            data={filterGames}
                            renderItem={({item}) => <CardUserBet data={item}/>}
                        />
                    }
                </ContainerBets>
                {showIconScroll && <IconScroll/>}
                <ContainerNav>
                    <NavButton
                        config={{
                            label: 'New Bet',
                            type: NavButtonType.PRIMARY,
                            iconArrowRight: true,
                            onPressHandler: () => {}
                        }}
                    />
                </ContainerNav>
            </RootContainer>
        </React.Fragment>
    );
}

export default Home;