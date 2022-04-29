import React, { useEffect, useLayoutEffect, useState } from "react";
import { Card, ModalConfirmation } from "@components/Layout";
import { IconButton, IconScroll, NavButton } from "@components/UI";
import { CartProps } from "@shared/model/types/navigation";
import { useTheme } from "styled-components";
import { ContainerButton, RootContainer, ContainerContent, LabelTotal, ContainerTotal, Label, ContainerBets } from "./styles";
import { Title } from "@components/UI";
import { NavButtonType } from "@shared/model/enums/form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { ICartStore, IGamesStore } from "@shared/model/interfaces/states";
import { Game } from "@shared/model/types/games";
import { formatPrice } from "@shared/util/formatBets";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import CardNewBet from "@components/Layout/CardNewBet";
import { cartActions } from "@store/cart-slice";

const Cart = ({ navigation }: CartProps ) => {

    const theme = useTheme();
    const dispatch = useDispatch();

    const cart = useSelector<RootState, ICartStore>((state) => state.cart);
    const games = useSelector<RootState, IGamesStore>((state) => state.games);

    const { removeBet, clearCart } = cartActions;
    
    const [total, setTotal] = useState(0);
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

    function confirmModalHandler() {
        dispatch(removeBet(showModalConfirm.betID));
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
                            onPressHandler: () => {}

                        }}/>
                    </ContainerButton>
                </Card>
            </RootContainer>
        </React.Fragment>
    );
}

export default Cart;