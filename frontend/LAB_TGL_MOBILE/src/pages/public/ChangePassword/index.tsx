import React, { useEffect, useState } from 'react';
import Form from '@components/Form';
import { Keyboard } from 'react-native';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavButtonType } from '@shared/model/enums/form';
import { FormChangePasswordSchema } from '@shared/schemas';
import { ChangePasswordProps } from '@shared/model/types/navigation';
import { auth } from '@shared/services';
import { useDispatch } from 'react-redux';
import { loadingActions } from '@store/loading-slice';
import { ModalError } from '@components/Layout';
import { formatError } from '@shared/util';

const ChangePassword = ( { navigation , route}: ChangePasswordProps ) => {

    const dispatch = useDispatch();
    
    const { token } = route.params;
    const { enableLoading, disableLoading } = loadingActions;
    const { changePassword } = auth();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(FormChangePasswordSchema)
    });

    const [error, setError] = useState<string | null>();

    useEffect(() => {
        const inputsErrors = Object.keys(errors);
        if( inputsErrors.length > 0 ) {
          setError(formatError(inputsErrors, errors));
        }
    }, [errors]);

    async function onSubmit(data: FieldValues) {
        Keyboard.dismiss();
        dispatch(enableLoading('Alterando password'));

        try {
            await changePassword({password: data.password, token});
            navigation.replace('SignIn');
        } catch(error: any) {
            setError(error.message);
        }

        dispatch(disableLoading());
    }

    function goBackHandler() {
        navigation.navigate('ResetPassword');
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
                title: 'Change password',
                inputs: [
                    { 
                        params: { placeholder: 'Password', secureTextEntry: true }, 
                        controller: { name: 'password', hasError: !!errors.password, control }
                    },
                    { 
                        params: { placeholder: 'Confirm Password', secureTextEntry: true }, 
                        controller: { name: 'passwordConfirm', hasError: !!errors.passwordConfirm, control }
                    }
                ],
                primaryButton: {
                    label: 'Recover',
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

export default ChangePassword;