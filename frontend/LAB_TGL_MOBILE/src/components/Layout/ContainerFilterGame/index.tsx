import React, { useRef, useState } from 'react';
import { ScrollView, ScrollViewComponent, View } from 'react-native';
import { Container, Touchable, ContainerButtons, ContainerIconLeft } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

const ContainerFilterGame = (props: any) => {

    const theme = useTheme();
    const scrollRef = useRef<ScrollView>(null);

    function toTopHandler() {
        scrollRef.current?.scrollTo({x: 0, y: 0, animated: true});
    }

    function toEndHandler() {
        scrollRef.current?.scrollToEnd({animated: true});
    }

    return( 
        <Container>
            <ContainerIconLeft>
                <Touchable onPress={toTopHandler}>
                    <Ionicons
                        name='chevron-back'
                        size={25}
                        color={theme.text.gray800}
                    />
                </Touchable>
            </ContainerIconLeft>

            <ContainerButtons>
                <ScrollView horizontal ref={scrollRef}>
                    {props.children}
                </ScrollView>
            </ContainerButtons>

            <Touchable onPress={toEndHandler}>
                <Ionicons
                    name='chevron-forward'
                    size={25}
                    color={theme.text.gray800}
                />
            </Touchable>
        </Container>
    );
}

export default ContainerFilterGame;