import React, { useState, useLayoutEffect, useEffect } from 'react';
import useKeyboard from '@hooks/useKeyboard';
import { RootState } from '@store/index';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { cartActions } from '@store/cart-slice';
import { useTypeGame } from '@hooks/useTypeGame';
import { useDispatch, useSelector } from 'react-redux';
import { NewBetProps } from '@shared/model/types/navigation';
import { ContainerFilterGame, ModalError, NumericKeyboard } from '@components/Layout';
import { Title, TypeGameButton, ButtonAction, IconButton, CartButton } from '@components/UI';
import { 
    RootContainer, 
    ContainerTypeGame, 
    ContainerTitle, 
    LabelGame, 
    Label, 
    LabelDescription, 
    ContainerOptionsRow,
    ContainerButtonSmall,
    ContainerButtonLarge,
    LabelButton,
    ContainerIconButton,
} from './styles';
import { useWindowDimensions } from 'react-native';


const NewBet = ({ navigation }: NewBetProps ) => {

    const dispatch = useDispatch();
    const [chosenNumbers, setChosenNumbers] = useState<number[]>([]);
    const [error, setError] = useState<string | null>(null);

    const { configSwitchGame, selectedGames } = useTypeGame({multipleSelection: false});
    
    const totalBets = useSelector<RootState, number>((state) => state.cart.cart.length);

    const theme = useTheme();
    const games = configSwitchGame();
    const selectedGame = selectedGames[0];
    const { addBet } = cartActions;
    const { width } = useWindowDimensions();

    const { keysConfig } = useKeyboard({ 
        numbersSelected: chosenNumbers, 
        onAddNumber: addNumberHandler,
        onRemoveNumber: removeNumberHandler
    });
    const keys = keysConfig(selectedGame);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <CartButton navigation={navigation} totalBets={totalBets}/>,
            headerLeft: () => (
                <IconButton config={{
                    icon: 'arrow-back',
                    size: 25,
                    color: theme.text.gray800,
                    onPress: () => navigation.replace('RecentGames')
                }}/>
            )
        });
    }, [totalBets]);

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
        if( chosenNumbers.length === selectedGame.max_number ) {
            dispatch(addBet({ 
                id: Date.now(),
                game_id: selectedGame.id,
                numbers: chosenNumbers
             }));
             clearGameHandler();
        } else {
            setError(`Restam ${selectedGame.max_number - chosenNumbers.length} a serem escolhidos`);
        }
    }

    function addNumberHandler(newNumber: number) {
        if( chosenNumbers.length < selectedGame.max_number ) {
            setChosenNumbers((currentNumbers) => [...currentNumbers, newNumber]);
        } else {
            setError(`Todos os ${selectedGame.max_number} já foram selecionados`);
        }
    }

    function removeNumberHandler(numberRemoved: number) {
        setChosenNumbers((currentNumbers) => currentNumbers.filter((number) => {
            if( number !== numberRemoved ) {
                return number;
            }
        }));
    }

    function confirmErrorHandler() {
        setError(null);
    }

    return(
        <React.Fragment>
             <ModalError
                isVisible={!!error}
                onConfirm={confirmErrorHandler}
                message={error!}
            />
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
                    <ContainerButtonSmall screenWidth={width}>
                        <ButtonAction onPress={completeGameHandler}>
                            <LabelButton>Complete game</LabelButton>
                        </ButtonAction>
                    </ContainerButtonSmall>
                    <ContainerButtonSmall screenWidth={width}>
                        <ButtonAction onPress={clearGameHandler}>
                            <LabelButton>Clear game</LabelButton>
                        </ButtonAction>
                    </ContainerButtonSmall>
                </ContainerOptionsRow>
                
                <ContainerButtonLarge screenWidth={width}>
                    <ButtonAction highlighted onPress={addToCartHandler}>
                        <ContainerIconButton>
                            <Ionicons
                                name='cart-outline'
                                size={25}
                                color={'#FFF'}
                            />
                            <LabelButton isHighighted>Add to cart</LabelButton>
                        </ContainerIconButton>
                    </ButtonAction>
                </ContainerButtonLarge>
            
            </RootContainer>
        </React.Fragment>
    );
}

export default NewBet;