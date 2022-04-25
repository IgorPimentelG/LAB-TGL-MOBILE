import { useEffect } from 'react';
import { useTypeGame } from '@hooks/useTypeGame';
import { NavButton, Title, TypeGameButton } from '@components/UI';
import { ContainerTypeGame, RootContainer, Label, ContainerBets } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { Bet } from '@shared/model/types/bets';
import { user } from '@shared/services';
import { userActions } from '@store/user-slice';
import { FlatList } from 'react-native';
import CardUserBet from '@components/Layout/CardUserBet';
import { NavButtonType } from '@shared/model/enums/form';

const Home = () => {

    const dispatch = useDispatch();

    const { account } = user();
    const { updateBetsUser } = userActions;
    const { configSwitchGame } = useTypeGame({ multipleSelection: true });

    const userBets = useSelector<RootState, Bet[]>((state) => state.auth.data!.bets!);

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
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={userBets}
                    renderItem={({item}) => <CardUserBet data={item}/>}
                />
            </ContainerBets>
            <NavButton
            config={{
                label: 'New Bet',
                type: NavButtonType.PRIMARY,
                iconArrowRight: true,
                onPressHandler: () => {}
            }}
            />
        </RootContainer>
    );
}

export default Home;