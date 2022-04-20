import { useSelector } from 'react-redux';
import { PublicRoutes } from './public.routes';
import { NavigationContainer } from '@react-navigation/native';
import { RootState } from '@store/index';

const Routes = () => {

    const isAuthenticated = useSelector<RootState>((state) => state.auth.isAuthenticated);

    return(
        <NavigationContainer>
            {!isAuthenticated && <PublicRoutes/>}
        </NavigationContainer>
    );
}

export default Routes;