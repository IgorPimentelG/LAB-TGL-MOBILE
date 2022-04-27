import { useState, useLayoutEffect } from 'react';
import { Game } from '@shared/model/types/games';
import { FlatList } from 'react-native';
import { Button, Label, RootContainer } from './styles';

const NumericKeyboard: React.FC<{ game: Game }> = ({ game }) => {

    const [numbers, setNumbers] = useState<string[]>([]);

    useLayoutEffect(() => {
        setNumbers([]);
        for(let i = 1; i < game.range + 1; i++) {
            let number = `${(i < 10) ? '0' : ''}${i}`;
            setNumbers((currentNumbers) => [...currentNumbers, number]);
        }
    }, [game]);

    return(
        <RootContainer>
            <FlatList
                data={numbers}
                keyExtractor={(item) => item}
                numColumns={5}
                renderItem={({item}) => (
                    <Button>
                        <Label>{item}</Label>
                    </Button>
                )}
            />
        </RootContainer>
    );
}

export default NumericKeyboard;