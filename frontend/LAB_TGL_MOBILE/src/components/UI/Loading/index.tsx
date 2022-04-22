import { Modal, ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';


const Loading = () => {

    const theme = useTheme();

    return(
        <Modal animationType='fade' transparent={true}>
            <ActivityIndicator size='large' color={theme.colors.primary}/>
        </Modal>
    );
}

export default Loading;