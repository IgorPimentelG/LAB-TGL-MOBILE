import { useState, useEffect } from 'react';
import { Card } from '@components/Layout';
import { IForm } from '@shared/model/interfaces/form';
import { Title, Input, Link, NavButton } from '@components/UI';
import { Keyboard, TouchableWithoutFeedback, ScrollView, useWindowDimensions } from 'react-native';
import { 
    ContainerLink, 
    ContainerTitle, 
    RootContainer, 
    ContainerText,
    Text,
    TextHighlighted
} from './styles';

const Form: React.FC<{ configForm: IForm }> = ({ configForm }) => {

    const [keyboardVisible, setKeybordVisible] = useState(false);
    const { width } = useWindowDimensions(); 

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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <RootContainer screenWidth={width}>
                {!keyboardVisible && configForm.marketing && (
                        <ContainerText>
                            <Text>{'The\nGreatest\nApp'}</Text>
                            <TextHighlighted>for</TextHighlighted>
                            <Text>LOTTERY</Text>
                        </ContainerText>
                )}
                    <ContainerTitle>
                        <Title>{configForm.title}</Title>
                    </ContainerTitle>
                    <Card>
                        {configForm.inputs.map((configInput, index) => (
                            <Input key={index} configInput={{...configInput, index: index}}/>
                        ))}

                        {configForm.link && (
                            <ContainerLink>
                                <Link onPress={configForm.link.onPress}>
                                    {configForm.link.label}
                                </Link>
                            </ContainerLink>
                        )}
                        <NavButton config={configForm.primaryButton}/>
                    </Card>
                    { configForm.secondaryButton && <NavButton config={configForm.secondaryButton}/>}
                </RootContainer>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
}

export default Form;