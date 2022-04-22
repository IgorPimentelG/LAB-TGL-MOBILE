import AsyncStorage from '@react-native-async-storage/async-storage';
import { Token } from '@shared/model/types/user';
import { userActions } from '@store/user-slice';
import { user } from '@shared/services';
import { useDispatch } from 'react-redux';

const useAuth = () => {

    const dispatch = useDispatch();
    const { account } = user();
    const { authenticate } = userActions;
    
    async function verifyToken() {
        const token = await AsyncStorage.getItem('@token');

        if( token ) {
            const userToken: Token = JSON.parse(token);
            const currentDate = new Date();
            const tokenExpires = new Date(userToken.expires_at);

            // Verificar se o token ainda não expirou
            if( currentDate <= tokenExpires ) {
                const response = await account();
                dispatch(authenticate(response.data));
            }
        }
    }

    return { verifyToken };
}

export { useAuth };