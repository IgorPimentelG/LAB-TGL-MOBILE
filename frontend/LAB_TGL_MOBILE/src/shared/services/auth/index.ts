import { api } from '../api/axios.config';
import { 
    LoginPayload,
    ResetPasswordPayload, 
    ChangePasswordPayload, 
    LoginResponse,
    ResetPasswordResponse,
    ChangePasswordResponse
} from '@shared/model/types/auth';

const auth = () => {

    async function login(credentials: LoginPayload): Promise<LoginResponse> {
        return api.post('/login', credentials);
    }

    async function resetPassword(email: ResetPasswordPayload): Promise<ResetPasswordResponse> {
        return api.post('/reset', JSON.stringify(email));
    }

    async function changePassword(data: ChangePasswordPayload): Promise<ChangePasswordResponse> {
        return api.post(`/reset/${data.token}`, JSON.stringify(data.password));
    }

    return { login, resetPassword, changePassword };
}

export { auth };