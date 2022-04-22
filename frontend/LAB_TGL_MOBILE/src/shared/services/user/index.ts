import { api } from '../api/axios.config';
import { 
    CreateUserPayload,
    CreateUserResponse,
    UpdateUserPayload,
    UpdateUserResponse,
    MyAccountResponse
} from '@shared/model/types/user';

const user = () => {

    async function createUser(newUser: CreateUserPayload): Promise<CreateUserResponse> {
        return api.post('user/create', newUser);
    }

    async function updateMyUser(user: UpdateUserPayload): Promise<UpdateUserResponse> {
        return api.put('user/update', user);
    }

    async function account(): Promise<MyAccountResponse> {
        return api.get('user/my-account');
    }

    return { createUser, updateMyUser, account };
}

export { user };
