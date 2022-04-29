import { Label, Touchable } from './styles';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { NavButtonType } from '@shared/model/enums/form';
import { IConfigNavButton } from '@shared/model/interfaces/form';
import { useLayoutEffect, useState } from 'react';

const NavButton: React.FC<{ config: IConfigNavButton }> = ({ config }) => {

    const theme = useTheme();
    const [color, setColor] = useState<string>(theme.main.green900);

    const iconSize = 25;

    useLayoutEffect(() => {
        switch(config.type) {
            case NavButtonType.PRIMARY:
                setColor(theme.main.green900);
                break;
            case NavButtonType.SECONDARY:
                setColor(theme.text.gray800);
                break;
            case NavButtonType.HIGHLIGHTED:
                setColor(theme.main.green700);
                break;
        }
    }, []);

    return(
        <Touchable onPress={config.onPressHandler}>
            <Label color={color}>
                { config.iconArrowLeft && (
                    <Ionicons 
                        name='arrow-back-outline' 
                        size={iconSize} 
                        color={color}
                    /> 
                )}

                { config.label }

                { config.iconArrowRight && (
                    <Ionicons
                        name='arrow-forward-outline' 
                        size={iconSize}
                        color={color}
                    /> 
                )}
            </Label>          
        </Touchable>
    );
}

export default NavButton;