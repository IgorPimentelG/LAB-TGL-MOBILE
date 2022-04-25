import { useTypeGame } from '@hooks/useTypeGame';
import { Title, TypeGameButton } from '@components/UI';
import { ContainerTypeGame, RootContainer, Label } from './styles';

const Home = () => {

    const { configSwitchGame } = useTypeGame({ multipleSelection: true });

    return(
        <RootContainer>
            <Title>RECENT GAMES</Title>
            <ContainerTypeGame>
                <Label>Filters</Label>
                { configSwitchGame().map((item, index) => (
                    <TypeGameButton key={index} config={item}/>
                ))}
            </ContainerTypeGame>     
        </RootContainer>
    );
}

export default Home;