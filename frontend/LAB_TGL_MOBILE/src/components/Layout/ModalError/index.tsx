import { Modal } from 'react-native';
import { Title } from '@components/UI';
import { useTheme } from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { 
    ContainerIcon,
    Container,
    RootContainer, 
    Text, 
    Touchable,
    ContainerContent, 
    LabelButton
} from './styles';

const ModalError: React.FC<{
    message: string;
    isVisible: boolean;
    onConfirm: () => void;
}> = ({ message, isVisible, onConfirm }) => {

    const theme = useTheme();

    return(
        <Modal animationType='slide' transparent={true} visible={isVisible}>
            <RootContainer> 
               <Container>
                    <ContainerIcon>
                        <MaterialCommunityIcons
                            name='alert-circle'
                            color={theme.colors.error}
                            size={80}
                        />
                    </ContainerIcon>
                    <ContainerContent>
                        <Title>ATENÇÃO</Title>
                        <Text>{message}</Text>
                    </ContainerContent>
                    <Touchable onPress={onConfirm}>
                        <LabelButton>OK</LabelButton>
                    </Touchable>
               </Container>
            </RootContainer>
        </Modal>
    );
}

export default ModalError;