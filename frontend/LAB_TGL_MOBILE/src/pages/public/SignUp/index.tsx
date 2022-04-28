import React, { useEffect, useState } from 'react';
import Form from '@components/Form';
import { Keyboard } from 'react-native';
import { user } from '@shared/services';
import { useDispatch } from 'react-redux';
import { FormSignUpSchema } from '@shared/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { NavButtonType } from '@shared/model/enums/form';
import { SignUpProps } from '@shared/model/types/navigation';
import { ModalError } from '@components/Layout';
import { loadingActions } from '@store/loading-slice';
import { Error } from '@shared/model/interfaces/error';
import { formatError } from '@shared/util';

const SignUp = ({ navigation }: SignUpProps) => {

    const dispatch = useDispatch();

    const [error, setError] = useState<string | null>();

    const { createUser } = user();
    const { enableLoading, disableLoading } = loadingActions;
    const { control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(FormSignUpSchema)
    });

    useEffect(() => {
        const inputsErrors = Object.keys(errors);
        if( inputsErrors.length > 0 ) {
          setError(formatError(inputsErrors, errors));
        }
    }, [errors]);

    async function onSubmit(data: FieldValues) {
        Keyboard.dismiss();

        dispatch(enableLoading('Criando nova conta'));

        const userData = {
            name: data.name,
            email: data.email,
            password: data.password
        };

        try {
           await createUser(userData);
        } catch(error: any) {
            console.log(error);
            setError(error.message);
        }

        dispatch(disableLoading());
    }

    function goBackHandler() {
        navigation.replace('SignIn');
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
                title: 'Registration',
                marketing: true,
                inputs: [               
                    { 
                        params: { placeholder: 'name' }, 
                        controller: { name: 'name', hasError: !!errors.name ,control }
                    },
                    { 
                        params: { placeholder: 'email' }, 
                        controller: { name: 'email', hasError: !!errors.email ,control }
                    },
                    {
                        params: { placeholder: 'Password', secureTextEntry: true },
                        controller: { name: 'password', hasError: !!errors.password, control }
                    }
                ],
                primaryButton: {
                    label: 'register',
                    type: NavButtonType.PRIMARY, 
                    iconArrowRight: true,
                    onPressHandler: handleSubmit(onSubmit)
                },
                secondaryButton: {
                    label: 'back',
                    type: NavButtonType.SECONDARY, 
                    iconArrowLeft: true,
                    onPressHandler: goBackHandler
                }
            }}/>
       </React.Fragment>
    );
}

export default SignUp;