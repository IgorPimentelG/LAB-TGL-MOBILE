import { useEffect, useLayoutEffect } from 'react';
import { NumericKeyboard } from '@components/Layout';
import { Title, TypeGameButton } from '@components/UI';
import { useTypeGame } from '@hooks/useTypeGame';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
    RootContainer, 
    ContainerTypeGame, 
    ContainerTitle, 
    LabelGame, 
    Label, 
    LabelDescription 
} from './styles';
import { NewBetProps } from '@shared/model/types/navigation';

const NewBet = ({ navigation }: NewBetProps ) => {

    const { configSwitchGame, selectedGames } = useTypeGame({multipleSelection: false});
    const games = configSwitchGame();

   

    return(
        <RootContainer>
            <ContainerTitle>
                <Title>NEW BET </Title>
                <LabelGame>FOR { selectedGames[0].type }</LabelGame>
            </ContainerTitle>

            <Label>Choose a game</Label>

            <ContainerTypeGame>
                <FlatList
                    data={games}
                    keyExtractor={(game) => game.id.toString()}
                    renderItem={({item}) => <TypeGameButton config={item}/>}
                    horizontal={true}
                />
            </ContainerTypeGame>

            <Label>Fill your bet</Label>
            <LabelDescription>
                { selectedGames[0].description }
            </LabelDescription>

           <NumericKeyboard game={ selectedGames[0] }/>
           
        </RootContainer>
    );
}

export default NewBet;