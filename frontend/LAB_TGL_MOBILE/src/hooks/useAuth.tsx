import AsyncStorage from '@react-native-async-storage/async-storage';
import { user } from '@shared/services';
import { useDispatch } from 'react-redux';
import { userActions } from '@store/user-slice';
import { Token } from '@shared/model/types/user';
import { loadingActions } from '@store/loading-slice';

const useAuth = () => {

    const dispatch = useDispatch();

    const { account } = user();
    const { authenticate } = userActions;
    const { enableLoading, disableLoading } = loadingActions;
    
    async function verifyToken() {

        dispatch(enableLoading(' '));

        const token = await AsyncStorage.getItem('token');

        if( token ) { 
            const userToken: Token = JSON.parse(token);
            const currentDate = new Date();
            const tokenExpires = new Date(userToken.expires_at);

            // Verificar se o token ainda não expirou
            if( currentDate <= tokenExpires ) {
                const response = await account();
                const payload = {
                    user: response.data,
                    token: token
                }
                dispatch(authenticate(payload));
            }
        }

        dispatch(disableLoading());
    }

    return { verifyToken };
}

export { useAuth };