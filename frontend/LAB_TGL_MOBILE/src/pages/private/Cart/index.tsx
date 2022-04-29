import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Title } from '@components/UI';
import { RootState } from '@store/index';
import { useTheme } from 'styled-components';
import { bets } from '@shared/services/bets';
import { cartActions } from '@store/cart-slice';
import { Game } from '@shared/model/types/games';
import { loadingActions } from '@store/loading-slice';
import { formatPrice } from '@shared/util/formatBets';
import { useDispatch, useSelector } from 'react-redux';
import { NavButtonType } from '@shared/model/enums/form';
import { CartProps } from '@shared/model/types/navigation';
import { IconButton, IconScroll, NavButton } from '@components/UI';
import { ICartStore, IGamesStore } from '@shared/model/interfaces/states';
import { Card, ModalConfirmation, CardNewBet, ModalError } from '@components/Layout';
import { 
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent, 
    ScrollView 
} from 'react-native';
import { 
    ContainerButton, 
    RootContainer, 
    ContainerContent, 
    LabelTotal, 
    ContainerTotal, 
    Label, 
    ContainerBets
} from './styles';

const Cart = ({ navigation }: CartProps ) => {

    const theme = useTheme();
    const dispatch = useDispatch();

    const cart = useSelector<RootState, ICartStore>((state) => state.cart);
    const games = useSelector<RootState, IGamesStore>((state) => state.games);

    const { removeBet, clearCart } = cartActions;
    const { enableLoading, disableLoading } = loadingActions;
    const { newBet } = bets();
    
    const [total, setTotal] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [showIconScroll, setShowIconScroll] = useState(false);
    const [showModalConfirm, setShowModalConfirm] = useState({
        isVisible: false,
        message: '',
        betID: 0
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <IconButton config={{
                    icon: 'arrow-back',
                    size: 25,
                    color: theme.text.gray800,
                    onPress: () => navigation.navigate('NewBet')
                }}/>
            )
        });
    });

    useLayoutEffect(() => {
        if(cart.cart.length > 3) {
            setShowIconScroll(true);
        } else {
            setShowIconScroll(false);
        }
    }, [cart.cart]);

    useEffect(() => {
        setTotal(0);
        cart.cart.forEach((item) => {
            const game = searchGame(item.game_id);
            setTotal((currentTotal) => currentTotal + game.price);
        });
    }, [cart]);

    function searchGame(id: number): Game {
        return games.types.filter((item) => item.id === id)[0];
    }

    function confirmErrorHandler() {
        setError(null);
    }

    function confirmModalHandler() {
        if( !!showModalConfirm.betID ) {
            dispatch(removeBet(showModalConfirm.betID));
        } else {
            saveHandler();
        }
        cancelModalHandler();
    }

    function cancelModalHandler() {
        setShowModalConfirm({
            isVisible: false,
            message: '',
            betID: 0
        });
    }

    function removeBetHandler(idBet: number) {
        setShowModalConfirm({
            isVisible: true,
            message: 'Deseja realmente remover o jogo do carrinho?',
            betID: idBet
        });
    }

    async function saveHandler() {
        dispatch(enableLoading('Salvando suas apostas'));
        try {
            const bets = cart.cart.map((bet) => ({ game_id: bet.game_id, numbers: bet.numbers }));
            await newBet({ games: bets });
            dispatch(clearCart());
            navigation.replace('RecentGames');
        } catch(error: any) {
            setError(error.message);
        }
        dispatch(disableLoading());
    }

    function onSave() {
        if( total >= games.min_cart_value! ) {
            setShowModalConfirm({
                isVisible: true,
                message: `Deseja realmente finalizar suas apostas no total de R$ ${formatPrice(total)}`,
                betID: 0
            });
        } else {
            setError(
                `É necessário no mínimo R$ ${formatPrice(games.min_cart_value!)} para salvar suas apostas`
            );
        }
    }

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
        <React.Fragment>
            <ModalConfirmation 
                isVisible={showModalConfirm.isVisible}
                message={showModalConfirm.message}
                onCancel={cancelModalHandler}
                onConfirm={confirmModalHandler}
            />
            <ModalError
                isVisible={!!error}
                onConfirm={confirmErrorHandler}
                message={error!}
            />
            <ScrollView>
                <RootContainer>
                    <Card>
                        <ContainerContent>
                            <Title>CART</Title>

                            {cart.cart.length === 0 && (
                                <Label>Carrinho vazio</Label>
                            )}

                            {cart.cart.length !== 0 && (
                                <ContainerBets lengthBets={cart.cart.length}>
                                    <FlatList
                                        key={Date.now()}
                                        data={cart.cart}
                                        onScroll={scrollListener}
                                        keyExtractor={(item) => item.id.toString()}
                                        renderItem={({item}) => {
                                            const game = searchGame(item.game_id);
                                            return(
                                                <CardNewBet 
                                                    numbers={item.numbers}
                                                    game={game.type}
                                                    price={game.price}
                                                    colorGame={game.color}
                                                    onRemove={removeBetHandler.bind(null, item.id)}
                                                />
                                            );
                                        }
                                    }
                                    />
                                </ContainerBets>
                            )}
                            { showIconScroll && (
                                <IconScroll/>
                            )}

                            <ContainerTotal>
                                <Title>CART</Title>
                                <LabelTotal>TOTAL: R$ {formatPrice(total)}</LabelTotal>
                            </ContainerTotal>
                        </ContainerContent>
                        <ContainerButton>
                            <NavButton config={{
                                label: 'Save',
                                type: NavButtonType.HIGHLIGHTED,
                                iconArrowRight: true,
                                onPressHandler: onSave
                            }}/>
                        </ContainerButton>
                    </Card>
                </RootContainer>
            </ScrollView>
        </React.Fragment>
    );
}

export default Cart;