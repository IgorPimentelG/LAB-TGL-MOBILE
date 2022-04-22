import { Logo } from '@components/UI';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { Modal, ActivityIndicator } from 'react-native';
import { RootContainer, ContainerLogo, ContainerMessage, Message } from './styles';
import { RootState } from '@store/index';

const Loading = () => {

    const theme = useTheme();
    const message = useSelector<RootState, string>((state) => state.loading.message);
    const isLoading = useSelector<RootState, boolean>((state) => state.loading.isLoading); 

    return(
        <Modal animationType='fade' transparent={true} visible={isLoading}>
            <RootContainer>
                <ContainerLogo>
                    <Logo/>
                </ContainerLogo>

                <ActivityIndicator size='large' color={theme.colors.primary}/>

               { message && 
                    <ContainerMessage>
                        <Message>{message}</Message>
                    </ContainerMessage>
                }
            </RootContainer>
        </Modal>
    );
}

export default Loading;