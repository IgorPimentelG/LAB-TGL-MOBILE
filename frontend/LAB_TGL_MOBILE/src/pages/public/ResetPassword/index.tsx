import React, { useEffect, useState } from 'react';
import Form from '@components/Form';
import { Keyboard } from 'react-native';
import { auth } from '@shared/services';
import { useDispatch } from 'react-redux';
import { loadingActions } from '@store/loading-slice';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { NavButtonType } from '@shared/model/enums/form';
import { FormResetPasswordSchema } from '@shared/schemas';
import { ResetPasswordProps } from '@shared/model/types/navigation';
import { formatError } from '@shared/util';
import { ModalError } from '@components/Layout';

const ResetPassword = ({ navigation }: ResetPasswordProps) => {

    const dispatch = useDispatch();

    const [error, setError] = useState<string | null>();

    const { findUser } = auth();
    const { enableLoading, disableLoading } = loadingActions;
    const { control, handleSubmit, formState: { errors }, resetField} = useForm({
        resolver: yupResolver(FormResetPasswordSchema)
    });

    useEffect(() => {
        const inputsErrors = Object.keys(errors);
        if( inputsErrors.length > 0 ) {
          setError(formatError(inputsErrors, errors));
        }
    }, [errors]);

    async function onSubmit(data: FieldValues) {
        Keyboard.dismiss();
        dispatch(enableLoading('Buscando dados'));
        
        const email = data.email;

        try {
            const response = await findUser(email);
            const token = response.data.token;
            navigation.replace('ChangePassword', { token });
        } catch(error: any) {
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
                title: 'Reset password',
                inputs: [
                    { 
                        params: { placeholder: 'Email' }, 
                        controller: { name: 'email', hasError: !!errors.email ,control }
                    },
                ],
                primaryButton: {
                    label: 'send link',
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

export default ResetPassword;