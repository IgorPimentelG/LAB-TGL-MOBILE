import { Touchable } from './styles';

const ButtonAction: React.FC<{
    children: any;
    highlighted?: boolean;
    onPress: () => void;
}> = ({ children, highlighted, onPress }) => {
    return(
        <Touchable onPress={onPress} isHighighted={highlighted}>
            {children}
        </Touchable>
    );
}

export default ButtonAction;