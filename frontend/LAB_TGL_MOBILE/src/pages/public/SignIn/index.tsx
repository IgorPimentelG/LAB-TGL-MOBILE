import { Logo, Title, Input } from "@components/UI";
import { Card } from "@components/Layout";
import { RootContainer } from './styles';

const SignIn = () => {
    return(
        <RootContainer>
            <Logo/>
            <Title>Authentication</Title>
            <Card>
               <Input/>
               <Input/>
            </Card>
        </RootContainer>
    );
}

export default SignIn;