import Form from '@components/Form';
import { auth } from '@shared/services';
import { useDispatch } from 'react-redux';
import { FormSignInSchema } from '@shared/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { NavButtonType } from '@shared/model/enums/form';
import { SignInProps } from '@shared/model/types/navigation';
import { LoginResponse } from '@shared/model/types/auth';
import { Keyboard } from 'react-native';

const SignIn = ({ navigation } : SignInProps) => {

    const { control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(FormSignInSchema)
    });

    const { login } = auth();

    async function onSubmit(data: FieldValues) {

        Keyboard.dismiss();

        const credentails = {
            email: data.email,
            password: data.password
        }

     
    }

    function onNavSignUp() {
       navigation.navigate('SignUp');
    }

    function onResetPassword() {
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