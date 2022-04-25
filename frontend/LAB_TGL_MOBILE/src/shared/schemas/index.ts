import * as yup from 'yup';

const baseSchemaEmail = {
    email: yup.string()
    .trim()
    .email('E-mail inválido')
    .required('Informe o seu e-mail')
};

const baseSchemaPassword = {
    password: yup.string()
    .required('Informe a senha')
    .min(6, 'A senha necessita ter no minínimo 6 caracteres')
    .max(16, 'A senha necessita ter no máximo 16 caracteres')
    .matches(/^\w+[-#@&!]{0,}\w+$/g,
    'Somente permitido caracteres alfanúmericos e os caracteres especiais [-, #, @, &, !]')
};

export const FormSignInSchema = yup.object().shape({
    email: baseSchemaEmail.email,
    password: yup.string()
    .required('Informe a sua senha')
    .matches(/^\w+[-#@&!]{0,}\w+$/g)
});

export const FormSignUpSchema = yup.object().shape({
    name: yup.string()
    .required('Inform o seu nome')
    .min(3, 'Nome muito curto')
    .max(100, 'Nome muito grande'),
    email: baseSchemaEmail.email,
    password: baseSchemaPassword.password
});

export const FormResetPasswordSchema = yup.object().shape({
    email: baseSchemaEmail.email
});

export const FormChangePasswordSchema = yup.object().shape({
    password: baseSchemaPassword.password,
    passwordConfirm: yup.string()
    .required('Confirme sua senha')
    .oneOf([yup.ref('password'), null], 'A confirmação da senha é diferente da senha escolhida')
});
