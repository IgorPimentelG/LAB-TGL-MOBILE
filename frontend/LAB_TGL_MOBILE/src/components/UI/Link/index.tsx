import { Label } from './styles';
import { TouchableOpacity } from 'react-native';

const Link: React.FC<{ 
    children: any, 
    onPress: () => void
}> = ({ children, onPress }) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Label>{children}</Label>
        </TouchableOpacity>
    );
}

export default Link;