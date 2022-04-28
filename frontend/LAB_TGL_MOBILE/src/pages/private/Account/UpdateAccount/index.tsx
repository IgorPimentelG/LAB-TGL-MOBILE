import React, { useLayoutEffect } from 'react';
import Form from "@components/Form";
import { useForm } from 'react-hook-form';
import { NavButtonType } from '@shared/model/enums/form';
import { UpdateAccountProps } from '@shared/model/types/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormUpdateAccount } from '@shared/schemas';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { User } from '@shared/model/types/user';

const UpdateAccount = ({ navigation }: UpdateAccountProps) => {

    const user = useSelector<RootState, User>((state) => state.auth.data!);
    const { control, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(FormUpdateAccount)
    });

    useLayoutEffect(() => {
        console.log(user.name);
        setValue('name', user.name);
        setValue('email', user.email);
    });

    function onSubmit() {

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
                    controller: { name: 'name', hasError: !!errors.name ,control }
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