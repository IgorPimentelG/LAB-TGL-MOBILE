import Form from '@components/Form';
import { useForm } from 'react-hook-form';
import { FormSignUpSchema } from '@shared/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavButtonType } from '@shared/model/enums/form';
import { SignUpProps } from '@shared/model/types/navigation';

const SignUp = ({ navigation }: SignUpProps) => {

    const { control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(FormSignUpSchema)
    });

    const onSubmit = () => {

    }

    const onGoBack = () => {
        navigation.navigate('SignIn');
    }

    return(
        <Form configForm={{
            title: 'Registration',
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
                onPressHandler: onGoBack
            }
        }}/>
    );
}

export default SignUp;