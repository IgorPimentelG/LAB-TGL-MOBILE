import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type PublicStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    Splash: undefined;
    ResetPassword: undefined;
    ChangePassword: { token: string };
}

export type PrivateDrawerParamList = {
    Drawer: undefined;
    Home: undefined;
    Account: undefined;
    NewBet: undefined;
}

// Public routes
export type SignInProps = NativeStackScreenProps<PublicStackParamList, 'SignIn'>;
export type SignUpProps = NativeStackScreenProps<PublicStackParamList, 'SignUp'>;
export type SplashProps = NativeStackScreenProps<PublicStackParamList, 'Splash'>;
export type ResetPasswordProps = NativeStackScreenProps<PublicStackParamList, 'ResetPassword'>;
export type ChangePasswordProps = NativeStackScreenProps<PublicStackParamList, 'ChangePassword'>;

// Private routes
export type HomeProps = NativeStackScreenProps<PrivateDrawerParamList, 'Home'>;
export type AccountProps = NativeStackScreenProps<PrivateDrawerParamList, 'Account'>;
export type NewBetProps = NativeStackScreenProps<PrivateDrawerParamList, 'NewBet'>;