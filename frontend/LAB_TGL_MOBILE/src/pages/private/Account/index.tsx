import { Card } from '@components/Layout';
import { Title } from '@components/UI';
import { RootContainer, ButtonMenu, ContainerIcon } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { User } from '@shared/model/types/user';
import { AccountProps } from '@shared/model/types/navigation';

const Account = ({ navigation }: AccountProps) => {

    const theme = useTheme();
    const user = useSelector<RootState, User>((state) => state.auth.data!);

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
            { user.is_admin === 1 && (<>
                 <Card>
                 <ButtonMenu>
                     <ContainerIcon>
                         <Ionicons 
                             name='add-outline' 
                             size={30}
                             color={theme.main.green700}
                         />
                     </ContainerIcon>
                     <Title>Criar Novo Game</Title>
                 </ButtonMenu>
             </Card>

            <Card>
            <ButtonMenu>
                <ContainerIcon>
                    <Ionicons 
                        name='sync-outline' 
                        size={30}
                        color={theme.main.green700}
                    />
                </ContainerIcon>
                <Title>Update Game</Title>
            </ButtonMenu>
            </Card>

                <Card>
                <ButtonMenu>
                    <ContainerIcon>
                        <Ionicons 
                            name='trash-outline' 
                            size={30}
                            color={theme.main.green700}
                        />
                    </ContainerIcon>
                    <Title>Deletar Game</Title>
                </ButtonMenu>
                </Card>
            </>)}
        </RootContainer>
    );
}

export default Account;