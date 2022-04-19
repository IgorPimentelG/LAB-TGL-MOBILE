import Form from '@components/Form';
import { NavButtonType } from '@shared/model/enums/form';
import { ResetPasswordProps } from '@shared/model/types/navigation';
import { useForm } from 'react-hook-form';

const ResetPassword = ({ navigation }: ResetPasswordProps) => {

    const { control, handleSubmit, formState: { errors }} = useForm();

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