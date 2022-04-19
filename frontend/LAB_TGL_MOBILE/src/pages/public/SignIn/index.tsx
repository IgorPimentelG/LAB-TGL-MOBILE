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
                { 
                    params: { placeholder: 'Email' }, 
                    controller: { name: 'email', hasError: !!errors.email ,control }
                },
                {
                    params: { placeholder: 'Password', secureTextEntry: true },
                    controller: { name: 'password', hasError: !!errors.password, control }
                }
            ],
            link: { label: 'I forgot my password', onPress: onResetPassword },
            primaryButton: {
                label: 'log in',
                type: NavButtonType.PRIMARY, 
                iconArrowRight: true,
                onPressHandler: handleSubmit(onSubmit)
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