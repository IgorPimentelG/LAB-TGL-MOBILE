import Form from "@components/Form";
import { NavButtonType } from "@shared/model/enums/form";
import { SignUpProps } from "@shared/model/types/navigation";

const SignUp = ({ navigation }: SignUpProps) => {

    const onSubmitHandler = () => {

    }

    const onGoBackHandedler = () => {
        navigation.navigate('SignIn');
    }

    return(
        <Form configForm={{
            title: 'Registration',
            inputs: [
                {placeholder: 'Name'},
                {placeholder: 'Email'},
                {placeholder: 'Password', secureTextEntry: true}
            ],
            primaryButton: {
                label: 'register',
                type: NavButtonType.PRIMARY, 
                iconArrowRight: true,
                onPressHandler: onSubmitHandler
            },
            secondaryButton: {
                label: 'back',
                type: NavButtonType.SECONDARY, 
                iconArrowLeft: true,
                onPressHandler: onGoBackHandedler
            }
        }}/>
    );
}

export default SignUp;