import Form from '@components/Form';
import { NavButtonType } from '@shared/model/enums/form';
import { SignInProps } from '@shared/model/types/navigation';
import { useForm } from 'react-hook-form';

const SignIn = ({ navigation } : SignInProps) => {

    const { control, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = () => {

    }

    const onNavSignUp = () => {
       navigation.navigate('SignUp');
    }

    const onResetPassword = () => {
        navigation.navigate('ResetPassword');
    }

    return(
        <Form configForm={{
            title: 'Authentication',
            inputs: [
                {placeholder: 'Email'},
                {placeholder: 'Password', secureTextEntry: true}
            ],
            link: { label: 'I forgot my password', onPress: onResetPassword },
            primaryButton: {
                label: 'log in',
                type: NavButtonType.PRIMARY, 
                iconArrowRight: true,
                onPressHandler: onSubmit
            },
            secondaryButton: {
                label: 'sign up',
                type: NavButtonType.SECONDARY, 
                iconArrowRight: true,
                onPressHandler: onNavSignUp
            }
        }}/>
    );
}

export default SignIn;