import { Title } from '@components/UI';
import { Card } from '@components/Layout';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { AccountProps } from '@shared/model/types/navigation';
import { RootContainer, ButtonMenu, ContainerIcon } from './styles';

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