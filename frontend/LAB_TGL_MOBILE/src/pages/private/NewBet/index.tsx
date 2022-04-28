import { useState, useLayoutEffect, useEffect } from 'react';
import { Title, TypeGameButton, ButtonAction, IconButton } from '@components/UI';
import { ContainerFilterGame, NumericKeyboard } from '@components/Layout';
import { useTypeGame } from '@hooks/useTypeGame';
import { NewBetProps } from '@shared/model/types/navigation';
import useKeyboard from '@hooks/useKeyboard';
import { KeyboardConfiguration } from '@shared/model/types/keyboard';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { 
    RootContainer, 
    ContainerTypeGame, 
    ContainerTitle, 
    LabelGame, 
    Label, 
    LabelDescription, 
    ContainerOptionsRow,
    ContainerButtonSmall,
    ContainerButtonLarge
} from './styles';

const NewBet = ({ navigation }: NewBetProps ) => {

    const [warning, setWarning] = useState<string | null>();
    const [chosenNumbers, setChosenNumbers] = useState<number[]>([]);
    const [keyboard, setKeyboard] = useState<KeyboardConfiguration>({
        keys: [],
        data: {numbersSelected: [], onAddNumber: () => {}, onRemoveNumber: () => {}}
    });
    
    const { configSwitchGame, selectedGames } = useTypeGame({multipleSelection: false});
    
    const theme = useTheme();
    const games = configSwitchGame();
    const selectedGame = selectedGames[0];

    const { keysConfig } = useKeyboard({ 
        numbersSelected: chosenNumbers, 
        onAddNumber: addNumberHandler,
        onRemoveNumber: removeNumberHandler
    });
    const keys = keysConfig(selectedGame);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton config={{
                    icon: 'cart-outline',
                    size: 30,
                    color: theme.text.gray800,
                    onPress: () => navigation.replace('Cart')
                }}/>
            ),
            headerLeft: () => (
                <IconButton config={{
                    icon: 'arrow-back',
                    size: 25,
                    color: theme.text.gray800,
                    onPress: () => navigation.replace('RecentGames')
                }}/>
            )
        });
    }, []);

    useEffect(() => {
        clearGameHandler();
    }, [selectedGame]);
    
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
            setChosenNumbers((currentNumbers) => [...currentNumbers, ...numbersSorted]);
        }
    }

    function clearGameHandler() {
        setChosenNumbers([]);
    }

    function addToCartHandler() {

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
                <ContainerFilterGame>
                    { configSwitchGame().map((item, index) => (
                        <TypeGameButton key={index} config={item}/>
                    ))}
                </ContainerFilterGame>
            </ContainerTypeGame>

            <Label>Fill your bet</Label>
            <LabelDescription>
                { selectedGame.description }
            </LabelDescription>

           <NumericKeyboard config={keys}/>

            <ContainerOptionsRow>
                <ContainerButtonSmall>
                    <ButtonAction onPress={completeGameHandler}>
                        Complete game
                    </ButtonAction>
                </ContainerButtonSmall>
                <ContainerButtonSmall>
                    <ButtonAction onPress={clearGameHandler}>
                        Clear game
                    </ButtonAction>
                </ContainerButtonSmall>
            </ContainerOptionsRow>
            
            <ContainerButtonLarge>
                <ButtonAction highlighted onPress={addToCartHandler}>
                    <Ionicons
                        name='cart-outline'
                        size={25}
                    />
                    Add to cart
                </ButtonAction>
            </ContainerButtonLarge>
           
        </RootContainer>
    );
}

export default NewBet;