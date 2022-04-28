import { FlatList } from 'react-native';
import { Button, Label, RootContainer } from './styles';
import { KeyboardConfiguration } from '@shared/model/types/keyboard';
import { useEffect, memo } from 'react';

const NumericKeyboard: React.FC<{ config: KeyboardConfiguration }> = ({ config }) => {
    
    const { data, keys } = config;
    const { numbersSelected, onAddNumber, onRemoveNumber } = data;

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
            <FlatList
                data={keys}
                keyExtractor={(item) => item.label}
                numColumns={5}
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
        </RootContainer>
    );
}

export default memo(NumericKeyboard);