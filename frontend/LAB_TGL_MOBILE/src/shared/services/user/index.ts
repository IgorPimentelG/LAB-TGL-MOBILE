import { 
    CreateUserPayload,
    CreateUserResponse,
    UpdateUserPayload,
    UpdateUserResponse,
    MyAccountResponse
} from '@shared/model/types/user';
import { api } from '../axios.config';

const user = () => {

    function createUer(newUser: CreateUserPayload): Promise<CreateUserResponse> {
        return api.post('user/create', JSON.stringify(newUser));
    }

    function updateMyUser(user: UpdateUserPayload): Promise<UpdateUserResponse> {
        return api.put('user/update', JSON.stringify(user));
    }

    function myAccount(): Promise<MyAccountResponse> {
        return api.get('user/my-account');
    }

    return { createUer, updateMyUser, myAccount };
}

export { user };
