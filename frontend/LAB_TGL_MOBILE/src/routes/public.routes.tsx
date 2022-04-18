import { PublicStackParamList } from '@shared/model/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SignUp, ResetPassword, ChangePassword } from '@pages/public';
import { useTheme } from 'styled-components';

const PublicRoutes = () => {

    const Stack = createNativeStackNavigator<PublicStackParamList>();
    const theme = useTheme();

    return(
        <Stack.Navigator 
            initialRouteName='SignIn' 
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: theme.colors.backgroundColor }
            }}
        >
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='ResetPassword' component={ResetPassword}/>
            <Stack.Screen name='ChangePassword' component={ChangePassword}/>
        </Stack.Navigator>
    );
}

export { PublicRoutes };