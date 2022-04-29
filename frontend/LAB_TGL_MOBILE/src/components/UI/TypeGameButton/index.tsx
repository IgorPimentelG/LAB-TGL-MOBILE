import { Label, Touchable } from "./styles";
import { IConfigTypeGame } from "./interfaces";
import { useWindowDimensions } from "react-native";

const TypeGameButton: React.FC<{ config: IConfigTypeGame }> = ({ config }) => {
   
    const { width } = useWindowDimensions();
    const { name, color, isEnabled, onPress } = config;

    return(
        <Touchable screenWidth={width} isEnabled={isEnabled} color={color} onPress={onPress}>
            <Label isEnabled={isEnabled} color={color}>{name}</Label>
        </Touchable>
    );
}

export default TypeGameButton;