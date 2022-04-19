import { Title, Input, Link, NavButton, TextMarketing } from '@components/UI';
import { Card } from '@components/Layout';
import { ContainerLink, ContainerTitle, RootContainer } from './styles';
import { IForm } from '@shared/model/interfaces/form';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const Form: React.FC<{ configForm: IForm }> = ({ configForm }) => {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <RootContainer>
                <TextMarketing/>
                <ContainerTitle>
                    <Title>{configForm.title}</Title>
                </ContainerTitle>
                <Card>
                    {configForm.inputs.map((configInput, index) => (
                        <Input key={index} configInput={configInput}/>
                    ))}

                    {configForm.link && (
                        <ContainerLink>
                            <Link onPress={configForm.link.onPress}>{configForm.link.label}</Link>
                        </ContainerLink>
                    )}
                    <NavButton config={configForm.primaryButton}/>
                </Card>
                <NavButton config={configForm.secondaryButton}/>
            </RootContainer>
        </TouchableWithoutFeedback>
    );
}

export default Form;