import { FlatList } from 'react-native';
import { Button, Label, RootContainer } from './styles';
import { KeyboardConfiguration } from '@shared/model/types/keyboard';

const NumericKeyboard: React.FC<{ config: KeyboardConfiguration }> = ({ config }) => {
    
    const { data, keys } = config;

    function buttonHandler() {

    }
    
    return(
        <RootContainer>
            <FlatList
                data={keys}
                keyExtractor={(item) => item.label}
                numColumns={5}
                renderItem={({item}) => (
                    <Button>
                        <Label>{item.label}</Label>
                    </Button>
                )}
            />
        </RootContainer>
    );
}

export default NumericKeyboard;