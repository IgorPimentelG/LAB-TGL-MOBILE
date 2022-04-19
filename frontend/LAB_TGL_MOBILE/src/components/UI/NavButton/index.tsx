import { Label, Touchable } from "./styles";
import { IConfigNavButton } from "@shared/model/interfaces/form";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { NavButtonType } from "@shared/model/enums/form";

const NavButton: React.FC<{ config: IConfigNavButton }> = ({ config }) => {

    const theme = useTheme();

    return(
        <Touchable onPress={config.onPressHandler}>
            { config.iconArrowLeft && (
                <Ionicons 
                    name='arrow-back-outline' 
                    size={25} 
                    color={
                        config.type === NavButtonType.PRIMARY ? 
                            theme.colors.primary : theme.colors.text
                    }
                /> 
            )}

            <Label type={config.type}>{ config.label }</Label>

            { config.iconArrowRight && (
                <Ionicons
                    name='arrow-forward-outline' 
                    size={25}
                    color={
                        config.type === NavButtonType.PRIMARY ? 
                            theme.colors.primary : theme.colors.text
                    }
                /> 
            )}
        </Touchable>
    );
}

export default NavButton;