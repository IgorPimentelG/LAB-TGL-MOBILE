import { PublicStackParamList } from '@shared/model/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SignIn, SignUp, Splash, ResetPassword, ChangePassword } from '@pages/public';

import { useTheme } from 'styled-components';

const PublicRoutes = () => {

    const theme = useTheme();
    const Stack = createNativeStackNavigator<PublicStackParamList>();

    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Splash' 
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: theme.colors.backgroundColor }
                }}
            >
                <Stack.Screen name='Splash' component={Splash}/>
                <Stack.Screen name='SignIn' component={SignIn}/>
                <Stack.Screen name='SignUp' component={SignUp}/>
                <Stack.Screen name='ResetPassword' component={ResetPassword}/>
                <Stack.Screen name='ChangePassword' component={ChangePassword}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { PublicRoutes };