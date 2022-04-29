import { Card } from "@components/Layout";
import { IconButton, NavButton } from "@components/UI";
import { CartProps } from "@shared/model/types/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { ContainerButton, RootContainer, ContainerContent, LabelTotal, ContainerTotal, Label, ContainerBets } from "./styles";
import { Title } from "@components/UI";
import { NavButtonType } from "@shared/model/enums/form";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";
import { ICartStore, IGamesStore } from "@shared/model/interfaces/states";
import { Game } from "@shared/model/types/games";
import { formatPrice } from "@shared/util/formatBets";
import { FlatList, View } from "react-native";
import CardNewBet from "@components/Layout/CardNewBet";

const Cart = ({ navigation }: CartProps ) => {

    const theme = useTheme();
    const cart = useSelector<RootState, ICartStore>((state) => state.cart);
    const games = useSelector<RootState, IGamesStore>((state) => state.games);
    const containerBetRef = useRef<View>(null);

    const [total, setTotal] = useState(0);

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

    useEffect(() => {
        cart.cart.forEach((item) => {
            const game = searchGame(item.game_id);
            setTotal((currentTotal) => currentTotal + game.price);
            console.log(total);
        });
    }, [cart]);


    function searchGame(id: number): Game {
        return games.types.filter((item) => item.id === id)[0];
    }

    return(
        <RootContainer>
            <Card>
                <ContainerContent>
                    <Title>CART</Title>

                    {cart.cart.length === 0 && (
                        <Label>Carrinho vazio</Label>
                    )}

                    {cart.cart.length !== 0 && (
                        <ContainerBets>
                            <FlatList
                                data={cart.cart}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({item}) => {
                                    const game = searchGame(item.game_id);
                                    return(
                                        <CardNewBet 
                                            numbers={item.numbers}
                                            game={game.type}
                                            price={game.price}
                                            colorGame={game.color}
                                        />
                                    );
                                }
                               }
                            />
                        </ContainerBets>
                    )}

                    <ContainerTotal>
                        <Title>CART</Title>
                        <LabelTotal>TOTAL: R$ {formatPrice(total)}</LabelTotal>
                    </ContainerTotal>
                </ContainerContent>
                <ContainerButton>
                    <NavButton config={{
                        label: 'Save',
                        type: NavButtonType.PRIMARY,
                        iconArrowRight: true,
                        onPressHandler: () => {}

                    }}/>
                </ContainerButton>
            </Card>
        </RootContainer>
    );
}

export default Cart;