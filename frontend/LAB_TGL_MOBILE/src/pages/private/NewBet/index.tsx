import { Title } from '@components/UI';
import { RootContainer, LabelGame, ContainerTitle } from './styles';

const NewBet = () => {
    return(
        <RootContainer>
            <ContainerTitle>
                <Title>NEW BET </Title>
                <LabelGame>FOR MEGA-SENA</LabelGame>
            </ContainerTitle>
        </RootContainer>
    );
}

export default NewBet;