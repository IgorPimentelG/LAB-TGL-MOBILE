import { useDispatch } from 'react-redux';
import { IconButton } from '@components/UI';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { UserActions } from '@store/user-slice';
import { MenuDrawer } from '@components/Layout';
import { Home, Account, NewBet } from '@pages/private';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PrivateDrawerParamList } from '@shared/model/types/navigation';

const PrivateRoutes = () => {

    const theme = useTheme();
    const dispatch = useDispatch();
    const Drawer = createDrawerNavigator<PrivateDrawerParamList>();

    const { logout } = UserActions; 

    function onLogout() {
        dispatch(logout());
    }
    
    return(
        <NavigationContainer>
            <Drawer.Navigator 
                drawerContent={(props) => <MenuDrawer {...props}/>}
                initialRouteName='Home'
                screenOptions={{
                    sceneContainerStyle: {  backgroundColor: theme.colors.backgroundColor },
                    headerTitleAlign: 'center',
                    drawerActiveBackgroundColor: theme.colors.primary,
                    drawerActiveTintColor: '#FFF',
                    headerTintColor: theme.colors.text,
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
                           color: theme.colors.text,
                           onPress: onLogout
                       }}/>
                    )
                }}
            >
                <Drawer.Screen 
                    name='Home' 
                    component={Home}
                    options={{
                        drawerIcon: ({ color, size }) => <Ionicons name='home-outline' size={size} color={color}/>
                    }}
                />
                  <Drawer.Screen 
                    name='NewBet' 
                    component={NewBet} 
                    options={{
                        title: 'New Bet',
                        drawerIcon: ({ color, size }) => <Ionicons name='add' size={size} color={color}/>
                    }}
                />
                <Drawer.Screen 
                    name='Account' 
                    component={Account}
                    options={{ 
                        title: 'My Account',
                        drawerIcon: ({ color, size }) => <Ionicons name='settings-outline' size={size} color={color}/> 
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export { PrivateRoutes };