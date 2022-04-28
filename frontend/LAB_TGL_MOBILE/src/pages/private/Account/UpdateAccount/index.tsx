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
    const [warning, setWarning] = useState<string | null>();

    async function onSubmit(data: FieldValues) {
        const { name, email } = data;

        if(name !== userData.name || email !== userData.email) {
            try {
                dispatch(enableLoading('Atualizando conta'));
                const emailResponse = await findUser(email);
                
                if( emailResponse.data.id === userData.id ) {
                    await updateMyUser({ name, email });
                } else {
                    setWarning('E-mail não disponível');
                }
            } catch(error: any) {
                setError('Não foi possível atualizar sua conta');
            }
            dispatch(disableLoading());
        }
    }

    return(
        <React.Fragment>
        {/* <ModalError
            message={error!}
            isVisible={!!error}
            onConfirm={onConfirmModal}
        /> */}
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
                onPressHandler: handleSubmit(onSubmit)
            }
        }}/>
        </React.Fragment>
    );
}

export default UpdateAccount;