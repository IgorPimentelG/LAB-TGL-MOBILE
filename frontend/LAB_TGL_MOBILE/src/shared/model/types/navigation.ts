import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type PublicStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    Splash: undefined;
    ResetPassword: undefined;
    ChangePassword: undefined;
}

export type SignInProps = NativeStackScreenProps<PublicStackParamList, 'SignIn'>
export type SignUpProps = NativeStackScreenProps<PublicStackParamList, 'SignUp'>
export type SplashProps = NativeStackScreenProps<PublicStackParamList, 'Splash'>
export type ResetPasswordProps = NativeStackScreenProps<PublicStackParamList, 'ResetPassword'>
export type ChangePasswordProps = NativeStackScreenProps<PublicStackParamList, 'ChangePassword'>
