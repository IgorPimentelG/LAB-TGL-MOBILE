import * as yup from 'yup';

export const baseSchemaEmail = {
    email: yup.string()
    .trim()
    .email('E-mail inválido')
    .required('Informe o seu e-mail')
};

export const baseSchemaPassword = {
    password: yup.string()
    .required('Informe a senha')
    .min(6, 'A senha necessita ter no minínimo 6 caracteres')
    .max(16, 'A senha necessita ter no máximo 16 caracteres')
    .matches(/^\w+[-#@&!]{0,}\w+$/g,
    'Somente permitido caracteres alfanúmericos e os caracteres especiais [-, #, @, &, !]')
};

export const baseSchemaName = {
    name: yup.string()
    .trim()
    .required('Informe o seu nome')
    .min(3, 'Nome muito curto')
    .matches(/^[a-zA-Z]+([\s][a-zA-Z]+){0,}[a-zA-Z]+$/g, 'Nome inválido')
};