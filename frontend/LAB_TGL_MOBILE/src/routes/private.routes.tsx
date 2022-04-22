import { Home, Account, NewBet } from '@pages/private';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { PrivateDrawerParamList } from '@shared/model/types/navigation';
import { useTheme } from 'styled-components';
import { useDispatch } from 'react-redux';
import { UserActions } from '@store/user-slice';
import IconButton from '@components/UI/IconButton';


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
                initialRouteName='Home'
                screenOptions={{
                    sceneContainerStyle: {  backgroundColor: theme.colors.backgroundColor },
                    headerTitleAlign: 'center',
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
                />
                <Drawer.Screen 
                    name='Account' 
                    component={Account}
                    options={{ title: 'My Account' }}
                />
                <Drawer.Screen 
                    name='NewBet' 
                    component={NewBet} 
                    options={{ title: 'New Bet'}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export { PrivateRoutes };