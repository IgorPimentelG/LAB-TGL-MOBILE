import { IConfigTypeGame } from "./interfaces";
import { Label, Touchable } from "./styles";

const TypeGameButton: React.FC<{ config: IConfigTypeGame }> = ({ config }) => {

    const { name, color, isEnabled, onPress } = config;

    return(
        <Touchable 
            isEnabled={isEnabled}
            color={color}
            onPress={onPress}
        >
            <Label isEnabled={isEnabled} color={color}>{name}</Label>
        </Touchable>
    );
}

export default TypeGameButton;