import { Touchable, Label } from './styles';

const ButtonAction: React.FC<{
    children: any;
    highlighted?: boolean;
    onPress: () => void;
}> = ({ children, highlighted, onPress }) => {
    return(
        <Touchable onPress={onPress} isHighighted={highlighted}>
            <Label isHighighted={highlighted}>
                {children}
            </Label>
        </Touchable>
    );
}

export default ButtonAction;