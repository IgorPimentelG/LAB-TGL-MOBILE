import { Ionicons } from '@expo/vector-icons';
import { Touchable } from './styles';

interface IConfigIconButton {
    icon: any;
    size: number;
    color: string;
    onPress: () => void;
}

const IconButton: React.FC<{ config: IConfigIconButton }> = ({ config }) => {

    const { icon, size, color, onPress } = config;

    return(
        <Touchable onPress={onPress}>
            <Ionicons name={icon} size={size} color={color}/>
        </Touchable>
    );
}

export default IconButton;