import { Title } from '@components/UI';
import { Modal, useWindowDimensions } from 'react-native';
import { Text, RootContainer } from '../ModalError/styles';
import { ButtonConfirm, Container, ContainerOptions, ButtonCancel, LabelButton } from './styles';

const ModalConfirmation: React.FC<{
    isVisible: boolean;
    message: string;
    onCancel: () => void;
    onConfirm: () => void;
}> = ({ isVisible, message, onCancel, onConfirm }) => {

    const { width } = useWindowDimensions();

    return(
        <Modal transparent={true} animationType={'fade'} visible={isVisible}>
            <RootContainer>
                <Container screenWidth={width}>
                    <Title>Atenção</Title>
                    <Text>{message}</Text>
                    <ContainerOptions>
                        <ButtonCancel onPress={onCancel}>
                            <LabelButton>Cancelar</LabelButton>
                        </ButtonCancel>
                        <ButtonConfirm onPress={onConfirm}>
                            <LabelButton>Confirmar</LabelButton>
                        </ButtonConfirm>
                    </ContainerOptions>
                </Container>
            </RootContainer>
        </Modal>
    );
}

export default ModalConfirmation;