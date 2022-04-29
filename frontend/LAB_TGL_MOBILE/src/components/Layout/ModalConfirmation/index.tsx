import { Title } from '@components/UI';
import { Modal } from 'react-native';
import { ButtonConfirm, Container, ContainerOptions, ButtonCancel, LabelButton } from './styles';
import { Text, RootContainer } from '../ModalError/styles';

const ModalConfirmation: React.FC<{
    isVisible: boolean;
    message: string;
    onCancel: () => void;
    onConfirm: () => void;
}> = ({ isVisible, message, onCancel, onConfirm }) => {
    return(
        <Modal transparent={true} animationType={'fade'} visible={isVisible}>
            <RootContainer>
                <Container>
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