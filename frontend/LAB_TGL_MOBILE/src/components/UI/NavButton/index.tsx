import { Label, Touchable } from "./styles";
import { IConfigNavButton } from "@shared/model/interfaces/form";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { NavButtonType } from "@shared/model/enums/form";

const NavButton: React.FC<{ config: IConfigNavButton }> = ({ config }) => {

    const theme = useTheme();

    const iconColor = config.type === NavButtonType.PRIMARY ? theme.colors.primary : theme.colors.text;
    const iconSize = 25;

    return(
        <Touchable onPress={config.onPressHandler}>
            <Label type={config.type}>
                { config.iconArrowLeft && (
                    <Ionicons 
                        name='arrow-back-outline' 
                        size={iconSize} 
                        color={iconColor}
                    /> 
                )}

                { config.label }

                { config.iconArrowRight && (
                    <Ionicons
                        name='arrow-forward-outline' 
                        size={iconSize}
                        color={iconColor}
                    /> 
                )}
            </Label>          
        </Touchable>
    );
}

export default NavButton;