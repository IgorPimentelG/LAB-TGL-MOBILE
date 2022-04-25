import { api } from '../api/axios.config';
import { 
    LoginPayload,
    FindUserPayload, 
    ChangePasswordPayload, 
    LoginResponse,
    FindUserResponse,
    ChangePasswordResponse
} from '@shared/model/types/auth';

const auth = () => {

    async function login(credentials: LoginPayload): Promise<LoginResponse> {
        return api.post('/login', credentials);
    }

    async function findUser(email: FindUserPayload): Promise<FindUserResponse> {
        return api.post('/reset', {email});
    }

    async function changePassword(data: ChangePasswordPayload): Promise<ChangePasswordResponse> {
        return api.post(`/reset/${data.token}`, {password: data.password});
    }

    return { login, findUser, changePassword };
}

export { auth };