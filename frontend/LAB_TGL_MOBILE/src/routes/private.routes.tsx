import { useDispatch } from 'react-redux';
import { IconButton } from '@components/UI';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { userActions } from '@store/user-slice';
import { MenuDrawer } from '@components/Layout';
import { Home, Account, NewBet } from '@pages/private';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PrivateDrawerParamList, PrivateStackParamList } from '@shared/model/types/navigation';
import { createStackNavigator } from '@react-navigation/stack';

const PrivateRoutes = () => {

    const theme = useTheme();
    const dispatch = useDispatch();
    const Drawer = createDrawerNavigator<PrivateDrawerParamList>();
    const Stack = createStackNavigator<PrivateStackParamList>();

    const { logout } = userActions; 

    function onLogout() {
        dispatch(logout());
    }

    function DrawerNavigator() {
        return(
            <Drawer.Navigator 
                drawerContent={(props) => <MenuDrawer {...props}/>}
                initialRouteName='Home'
                screenOptions={{
                    sceneContainerStyle: {  backgroundColor: theme.backgrund.white900 },
                    headerTitleAlign: 'center',
                    drawerActiveBackgroundColor: theme.main.green900,
                    drawerActiveTintColor: '#FFF',
                    headerTintColor: theme.text.gray800,
                    headerTitleStyle: {
                        fontStyle: 'italic',
                        fontWeight: 'bold'
                    },
                    drawerLabelStyle: {
                        marginLeft: -25,
                        fontStyle: 'italic',
                        fontWeight: 'bold'
                    },
                    headerRight: () => (
                        <IconButton config={{
                            icon: 'log-out-outline',
                            size: 25,
                            color: theme.text.gray800,
                            onPress: onLogout
                        }}/>
                    )
            }}>
                <Drawer.Screen 
                    name='Home' 
                    component={Home}
                    options={{
                        drawerIcon: ({ color, size }) => (
                            <Ionicons name='home-outline' size={size} color={color}/>
                        )
                    }}
                />
                <Drawer.Screen 
                    name='Account' 
                    component={Account}
                    options={{ 
                        title: 'My Account',
                        drawerIcon: ({ color, size }) => (
                            <Ionicons name='settings-outline' size={size} color={color}/> 
                        )
                    }}
                />
            </Drawer.Navigator>
        );
    }
    
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={({ navigation }) => ({
                    headerTitleAlign: 'center',
                    headerTitleStyle: { 
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        color: theme.text.gray800
                    },
                    headerLeft: () => (
                        <IconButton config={{
                            icon: 'arrow-back',
                            size: 25,
                            color: theme.text.gray800,
                            onPress: () => navigation.replace('RecentGames')
                        }}/>
                    )
                })
             }>
                <Stack.Screen 
                    name='RecentGames' 
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name='NewBet' 
                    component={NewBet}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { PrivateRoutes };