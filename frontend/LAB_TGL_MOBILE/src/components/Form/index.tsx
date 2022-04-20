import { useState, useEffect } from 'react';
import { Card } from '@components/Layout';
import { IForm } from '@shared/model/interfaces/form';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { ContainerLink, ContainerTitle, RootContainer } from './styles';
import { Title, Input, Link, NavButton, TextMarketing } from '@components/UI';

const Form: React.FC<{ configForm: IForm }> = ({ configForm }) => {

    const [keyboardVisible, setKeybordVisible] = useState(false);

    // Obter estado do teclado
    useEffect(() => { 
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', changeStateKayboard);

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', changeStateKayboard);

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        }
    });

    function changeStateKayboard() {
        setKeybordVisible((currentState) => !currentState);
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <RootContainer>
               {!keyboardVisible && <TextMarketing/>}
                <ContainerTitle>
                    <Title>{configForm.title}</Title>
                </ContainerTitle>
                <Card>
                    {configForm.inputs.map((configInput, index) => (
                        <Input key={index} configInput={{...configInput, index: index}}/>
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