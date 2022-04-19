import * as yup from 'yup';

const baseSchemaEmail = {
    email: yup.string()
    .email('E=mail inválido')
    .required('Informe o e-mail')
};

const baseSchemaPassword = {
    password: yup.string()
    .required()
    .min(6, 'Minínimo de 6 caracteres para a senha')
    .max(16, 'Máximo de 16 caracteres para a senha')
};
