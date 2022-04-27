import { useState, useLayoutEffect } from 'react';
import { NumericKeyboard } from '@components/Layout';
import { Title, TypeGameButton } from '@components/UI';
import { useTypeGame } from '@hooks/useTypeGame';
import { FlatList } from 'react-native';
import { NewBetProps } from '@shared/model/types/navigation';
import ButtonAction from '@components/UI/ButtonAction';
import useKeyboard from '@hooks/useKeyboard';
import { 
    RootContainer, 
    ContainerTypeGame, 
    ContainerTitle, 
    LabelGame, 
    Label, 
    LabelDescription, 
    ContainerOptions
} from './styles';
import { KeyboardConfiguration } from '@shared/model/types/keyboard';


const NewBet = ({ navigation }: NewBetProps ) => {

    const [warning, setWarning] = useState<string | null>();
    const [chosenNumbers, setChosenNumbers] = useState<number[]>([]);
    const [keyboard, setKeyboard] = useState<KeyboardConfiguration>({
        keys: [],
        data: {numbersSelected: [], onAddNumber: () => {}, onRemoveNumber: () => {}}
    });
    
    const { configSwitchGame, selectedGames } = useTypeGame({multipleSelection: false});
    
    const games = configSwitchGame();
    const selectedGame = selectedGames[0];

    const { keysConfig } = useKeyboard({ 
        numbersSelected: chosenNumbers, 
        onAddNumber: addNumberHandler,
        onRemoveNumber: removeNumberHandler
    });

    useLayoutEffect(() => {
        setKeyboard(keysConfig(selectedGame));
    }, [keysConfig, selectedGame]);
    
    function completeGameHandler() {
        // Verificar se ainda restam números para serem completados
        if( chosenNumbers.length < selectedGame.max_number ) {

            const numbersSorted: number[] = [];
            let remainingNumbers = selectedGame.max_number - chosenNumbers.length;

            while( remainingNumbers !== 0 ) {
                while( true ) {
                    const numberSorted = Math.floor(Math.random() * selectedGame.range) + 1;

                    if( chosenNumbers.indexOf(numberSorted) === -1 && numbersSorted.indexOf(numberSorted) === -1) {
                        numbersSorted.push(numberSorted);
                        break;
                    }
                }
                remainingNumbers--;
            }   
        }
    }

    function clearGameHandler() {
        setChosenNumbers([]);
    }

    function addNumberHandler(newNumber: number) {
        if( chosenNumbers.length < selectedGame.max_number ) {
            setChosenNumbers((currentNumbers) => [...currentNumbers, newNumber]);
        } else {
            setWarning(`Todos os ${selectedGame.max_number} já foram escolhidos`);
        }
    }

    function removeNumberHandler(numberRemoved: number) {
        setChosenNumbers((currentNumbers) => currentNumbers.filter((number) => {
            if( number !== numberRemoved ) {
                return number;
            }
        }));
    }

    return(
        <RootContainer>
            <ContainerTitle>
                <Title>NEW BET </Title>
                <LabelGame>FOR { selectedGame.type }</LabelGame>
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
                { selectedGame.description }
            </LabelDescription>

           <NumericKeyboard config={keyboard} />

           <ContainerOptions>
               <ButtonAction onPress={completeGameHandler}>
                   Complete game
                </ButtonAction>
               <ButtonAction onPress={clearGameHandler}>
                   Clear game
                </ButtonAction>
           </ContainerOptions>
           
        </RootContainer>
    );
}

export default NewBet;