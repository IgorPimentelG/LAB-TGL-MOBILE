import { Card } from '@components/Layout';
import { Title } from '@components/UI';
import { RootContainer, ButtonMenu, ContainerIcon } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { User } from '@shared/model/types/user';
import { View } from 'react-native'
import { AccountProps } from '@shared/model/types/navigation';

const Account = ({ navigation }: AccountProps) => {

    const theme = useTheme();

    return(
        <RootContainer>
            <Card>
                <ButtonMenu onPress={() => navigation.navigate('UpdateAccount')}>
                    <ContainerIcon>
                        <Ionicons 
                            name='cog-outline' 
                            size={30}
                            color={theme.main.green700}
                        />
                    </ContainerIcon>
                    <Title>Atualize sua conta</Title>
                </ButtonMenu>
            </Card>
        </RootContainer>
    );
}

export default Account;