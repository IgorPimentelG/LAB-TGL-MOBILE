import { AxiosError } from 'axios';
import { Error } from '@shared/model/interfaces/error';
function formatError(inputs: string[], errors: any): string {
    let message = '';

    inputs.forEach((input) => {
        message += errors[input].message +`\n`;
    });

    return message;
}

function mountError(error: AxiosError): Error {
    const { response } = error;

    const message = response?.data.message ? response.data.message : response?.data.error.message;

    return {
        message: response ? message : 'Não foi possível se comunicar com o servidor',
        status: response ? response.status : 502
    }
}

export { formatError, mountError };