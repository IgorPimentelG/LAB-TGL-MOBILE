import React, { useEffect, useState } from 'react';
import Form from "@components/Form";
import { FieldValues, useForm } from 'react-hook-form';
import { NavButtonType } from '@shared/model/enums/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormUpdateAccount } from '@shared/schemas';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { user, auth } from '@shared/services';
import { User } from '@shared/model/types/user';
import { loadingActions } from '@store/loading-slice';
import { ModalConfirmation, ModalError } from '@components/Layout';
import { formatError } from '@shared/util';

const UpdateAccount = () => {

    const dispatch = useDispatch();
    const userData = useSelector<RootState, User>((state) => state.auth.data!);
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(FormUpdateAccount),
        defaultValues: { name: userData.name, email: userData.email }
    });
    
    const { findUser } = auth();
    const { updateMyUser } = user();
    const { enableLoading, disableLoading } = loadingActions;

    const [error, setError] = useState<string | null>();
    const [showModalConfirm, setShowModalConfirm] = useState({
        isVisible: false,
        message: '',
        data: { name: '', email: '' }
    });

    useEffect(() =>  {
        const inputsErrors = Object.keys(errors);
        if( inputsErrors.length > 0 ) {
          setError(formatError(inputsErrors, errors));
        }
    }, [errors]);

    function confirmErrorHandler() {
        setError(null);
    }

    function cancelModalConfirmationHandler() {
        setShowModalConfirm({
            isVisible: false,
            message: '',
            data: { name: '', email: '' }
        });
    }

    function confirmModalConfirmationHandler() {
        onSubmit(showModalConfirm.data.name, showModalConfirm.data.email);
        cancelModalConfirmationHandler();
    }

    function showModalConfirmationHandler(values: FieldValues) {
        const { name, email } = values;

        if(name !== userData.name || email !== userData.email) {
            setShowModalConfirm({
                isVisible: true,
                message: 'Deseja realmente atualizar sua conta?',
                data: { name, email }
            });
        }
        
    }

    async function onSubmit(name: any, email: any) {
        if(name !== userData.name || email !== userData.email) {
            try {
                dispatch(enableLoading('Atualizando conta'));
                const emailResponse = await findUser(email);
                
                if( emailResponse.data.id === userData.id ) {
                    await updateMyUser({ name, email });
                } else {
                    setError('E-mail não disponível');
                }
            } catch(error: any) {
                setError('Não foi possível atualizar sua conta');
            }
            dispatch(disableLoading());
        }
    }

    return(
        <React.Fragment>
            <ModalError
                message={error!}
                isVisible={!!error}
                onConfirm={confirmErrorHandler}
            />
            <ModalConfirmation
                isVisible={showModalConfirm.isVisible}
                message={showModalConfirm.message}
                onCancel={cancelModalConfirmationHandler}
                onConfirm={confirmModalConfirmationHandler}
            />
            <Form configForm={{
                title: 'Update Account',           
                inputs: [
                    { 
                        params: { placeholder: 'Name' }, 
                        controller: { name: 'name', hasError: !!errors.name, control }
                    },
                    {
                        params: { placeholder: 'Email' },
                        controller: { name: 'email', hasError: !!errors.email, control }
                    }
                ],
                primaryButton: {
                    label: 'Update',
                    type: NavButtonType.PRIMARY, 
                    onPressHandler: handleSubmit(showModalConfirmationHandler)
                }
            }}/>
        </React.Fragment>
    );
}

export default UpdateAccount;