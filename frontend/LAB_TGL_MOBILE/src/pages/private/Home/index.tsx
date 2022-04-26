import { useEffect, useState } from 'react';
import { RootState } from '@store/index';
import { user } from '@shared/services';
import { useSort } from '@hooks/useSort';
import { Bet } from '@shared/model/types/bets';
import { userActions } from '@store/user-slice';
import { CardUserBet } from '@components/Layout';
import { useTypeGame } from '@hooks/useTypeGame';
import { useDispatch, useSelector } from 'react-redux';
import { NavButtonType } from '@shared/model/enums/form';
import { IconScroll, NavButton, Title, TypeGameButton } from '@components/UI';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { ContainerTypeGame, RootContainer, Label, ContainerBets, ContainerNav } from './styles';

const Home = () => {

    const dispatch = useDispatch();

    const { account } = user();
    const { sortBets } = useSort();
    const { updateBetsUser } = userActions;
    const { configSwitchGame, selectedGames } = useTypeGame({ multipleSelection: true });

    const userBets = useSelector<RootState, Bet[]>((state) => state.auth.data!.bets!);

    const [filterGames, setFilterGames] = useState<Bet[]>([]);
    const [showIconScroll, setShowIconScroll] = useState(false);

    // Consultar apostas do usuário logado
    useEffect(() => {
        const fetchAccount = async () => {
           try {
            const response = await account();
            dispatch(updateBetsUser(response.data));
           } catch(error: any) {

           }
        }   
        fetchAccount();
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
 
    return(
        <RootContainer>
            <Title>RECENT GAMES</Title>
            <ContainerTypeGame>
                <Label>Filters</Label>
                { configSwitchGame().map((item, index) => (
                    <TypeGameButton key={index} config={item}/>
                ))}
            </ContainerTypeGame>     
            <ContainerBets>
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
    );
}

export default Home;