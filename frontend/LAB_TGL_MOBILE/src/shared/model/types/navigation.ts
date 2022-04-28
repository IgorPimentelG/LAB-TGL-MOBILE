import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type PublicStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    Splash: undefined;
    ResetPassword: undefined;
    ChangePassword: { token: string };
}

export type PrivateDrawerParamList = {
    Home: undefined;
    Account: undefined;
    UpdateAccount: undefined;
}

export type PrivateStackParamList = {
    RecentGames: NativeStackScreenProps<PrivateDrawerParamList>;
    NewBet: undefined;
    Cart: undefined;
    UpdateAccount: undefined;
}

// Public routes
export type SignInProps = NativeStackScreenProps<PublicStackParamList, 'SignIn'>;
export type SignUpProps = NativeStackScreenProps<PublicStackParamList, 'SignUp'>;
export type SplashProps = NativeStackScreenProps<PublicStackParamList, 'Splash'>;
export type ResetPasswordProps = NativeStackScreenProps<PublicStackParamList, 'ResetPassword'>;
export type ChangePasswordProps = NativeStackScreenProps<PublicStackParamList, 'ChangePassword'>;

// Private routes
export type NewBetProps = NativeStackScreenProps<PrivateStackParamList, 'NewBet'>;
export type HomeProps = NativeStackScreenProps<PrivateStackParamList, 'RecentGames'>;
export type AccountProps = NativeStackScreenProps<PrivateDrawerParamList, 'Account'>;
export type UpdateAccountProps = NativeStackScreenProps<PrivateStackParamList, 'UpdateAccount'>;
