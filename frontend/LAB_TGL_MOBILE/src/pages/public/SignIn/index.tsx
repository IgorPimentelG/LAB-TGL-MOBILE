import React, { useEffect, useState } from 'react';
import Form from '@components/Form';
import { Keyboard } from 'react-native';
import { auth } from '@shared/services';
import { useDispatch } from 'react-redux';
import { formatError } from '@shared/util';
import { userActions } from '@store/user-slice';
import { ModalError } from '@components/Layout';
import { FormSignInSchema } from '@shared/schemas';
import { loadingActions } from '@store/loading-slice';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { NavButtonType } from '@shared/model/enums/form';
import { SignInProps } from '@shared/model/types/navigation';

const SignIn = ({ navigation } : SignInProps) => {

    const dispatch = useDispatch();

    const [error, setError] = useState<string | null>();

    const { login } = auth();
    const { authenticate } = userActions;
    const { enableLoading, disableLoading } = loadingActions;
    const { control, handleSubmit, formState: { errors }, setValue} = useForm({
        resolver: yupResolver(FormSignInSchema)
    });

    useEffect(() => {
        const inputsErrors = Object.keys(errors);
        if( inputsErrors.length > 0 ) {
          setError(formatError(inputsErrors, errors));
        }
    }, [errors]);
    
    async function onSubmit(data: FieldValues) {

        dispatch(enableLoading('Verificando dados'));

        Keyboard.dismiss();

        const credentails = { email: data.email, password: data.password };

        try {
            const response = await login(credentails);
            dispatch(authenticate({
                user: response.data.user,
                token: response.data.token
            }));
        } catch(error: any) {
            setError(error.message);
        }

        dispatch(disableLoading());
    }

    function signUpHandler() {
       navigation.replace('SignUp');
    }

    function resetPasswordHandler() {
        navigation.replace('ResetPassword');
    }

    function onConfirmModal() {
        setError(null);
    }

    return(
        <React.Fragment>
            <ModalError
                message={error!}
                isVisible={!!error}
                onConfirm={onConfirmModal}
            />
            <Form configForm={{
                title: 'Authentication', 
                marketing: true,  
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
                link: { label: 'I forgot my password', onPress: resetPasswordHandler },
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
                    onPressHandler: signUpHandler
                }
            }}/>
        </React.Fragment>
    );
}

export default SignIn;