import Form from "@components/Form";
import { NavButtonType } from "@shared/model/enums/form";
import { ResetPasswordProps } from "@shared/model/types/navigation";

const ResetPassword = ({ navigation }: ResetPasswordProps) => {

    const onSubmit = () => {

    }

    const onGoBack = () => {
        navigation.navigate('SignIn');
    }

    return(
        <Form configForm={{
            title: 'Reset password',
            inputs: [
                {placeholder: 'Email'},
            ],
            primaryButton: {
                label: 'send link',
                type: NavButtonType.PRIMARY, 
                iconArrowRight: true,
                onPressHandler: onSubmit
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