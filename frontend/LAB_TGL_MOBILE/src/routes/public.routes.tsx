import { PublicStackParamList } from '@shared/model/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SignUp, ResetPassword, ChangePassword } from '@pages/public';

const PublicRoutes = () => {

    const Stack = createNativeStackNavigator<PublicStackParamList>();

    return(
        <Stack.Navigator>
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='ResetPassword' component={ResetPassword}/>
            <Stack.Screen name='ChangePassword' component={ChangePassword}/>
        </Stack.Navigator>
    );
}

export { PublicRoutes };