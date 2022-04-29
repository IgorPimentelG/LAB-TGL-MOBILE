import { FlatList, useWindowDimensions } from 'react-native';
import { Button, Label, RootContainer } from './styles';
import { KeyboardConfiguration } from '@shared/model/types/keyboard';
import { useEffect, memo } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const NumericKeyboard: React.FC<{ config: KeyboardConfiguration }> = ({ config }) => {
    
    const { data, keys } = config;
    const { numbersSelected, onAddNumber, onRemoveNumber } = data;
    const { width } = useWindowDimensions();

    function verifyNumber(value: number) {
        return numbersSelected.includes(value);
    }

    function buttonHandler(value: number) {
        if( verifyNumber(value) ) {
            onRemoveNumber(value);
        } else {
            onAddNumber(value);
        }
    }
    
    return(
        <RootContainer>
            <ScrollView horizontal>
                <FlatList
                    key={Date.now()}
                    data={keys}
                    keyExtractor={(item) => item.label}
                    numColumns={width > 400 ? 10 : 5}
                    renderItem={({item}) => (
                        <Button 
                            isActive={verifyNumber(item.value)}
                            activeColor={item.activeColor} 
                            onPress={buttonHandler.bind(null, item.value)}
                        >
                            <Label>{item.label}</Label>
                        </Button>
                    )}
                />
            </ScrollView>
        </RootContainer>
    );
}

export default memo(NumericKeyboard);