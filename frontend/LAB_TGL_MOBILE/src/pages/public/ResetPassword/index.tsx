import Form from '@components/Form';
import { useForm } from 'react-hook-form';
import { FormResetPassword } from '@shared/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavButtonType } from '@shared/model/enums/form';
import { ResetPasswordProps } from '@shared/model/types/navigation';

const ResetPassword = ({ navigation }: ResetPasswordProps) => {

    const { control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(FormResetPassword)
    });

    const onSubmit = () => {

    }

    const onGoBack = () => {
        navigation.navigate('SignIn');
    }

    return(
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
                onPressHandler: onGoBack
            }
        }}/>
    );
}

export default ResetPassword;